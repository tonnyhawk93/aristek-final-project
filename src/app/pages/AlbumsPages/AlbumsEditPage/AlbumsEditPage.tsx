import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Layout, Col, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { AlbumForm, Spinner, MainPageLayout, NavButton } from "app/components";
import { operations, Types } from "./duck";

const { Content } = Layout;

const AlbumsEditPage = () => {
  const navigate = useNavigate();
  const { id = "" } = useParams();

  const { data, loading } = useQuery<
    Types.GetAlbumQuery,
    Types.GetAlbumQueryVariables
  >(operations.getAlbum, {
    variables: {
      id,
    },
  });

  const [
    editAlbum,
    {
      loading: editAlbumLoading,
      called: editAlbumCalled,
      error: editAlbumError,
    },
  ] = useMutation<Types.EditAlbumMutation, Types.EditAlbumMutationVariables>(
    operations.editAlbum
  );

  interface HandleSubmitProps {
    title: string;
    userId: string;
  }

  const handleSubmit = ({ title, userId }: HandleSubmitProps) => {
    editAlbum({
      variables: {
        id,
        input: {
          title,
          userId,
        },
      },
    });
  };

  const handleCancel = () => navigate("/albums");

  return (
    <MainPageLayout
      title="Edit album"
      headerButton={<NavButton pathTo="/albums" />}
    >
      {!data || loading || !data?.album ? (
        <Spinner />
      ) : (
        <Layout>
          <Content className="h-100">
            <Col className="h-100">
              <Row className="h-100" justify="start" align="middle">
                <AlbumForm
                  initialValues={{
                    title: data?.album?.title || "",
                    userId: data?.album?.user?.id || "",
                  }}
                  handleSubmit={handleSubmit}
                  handleCancel={handleCancel}
                  loading={editAlbumLoading}
                  called={editAlbumCalled}
                  error={editAlbumError}
                />
              </Row>
            </Col>
          </Content>
        </Layout>
      )}
    </MainPageLayout>
  );
};

export default AlbumsEditPage;
