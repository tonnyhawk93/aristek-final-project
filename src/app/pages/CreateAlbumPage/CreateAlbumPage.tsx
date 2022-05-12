import React from "react";
import { useMutation } from "@apollo/client";
import { Layout, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { AlbumEditForm, MainPageLayout, NavButton } from "app/components";
import { operations, Types } from "./duck";

const { Content } = Layout;

const DeleteAlbumPage = () => {
  const navigate = useNavigate();
  const [createAlbum, { loading, called, error }] = useMutation<
    Types.CreateAlbumMutation,
    Types.CreateAlbumMutationVariables
  >(operations.createAlbum);

  const handleSubmit = ({
    title,
    userId,
  }: {
    title: string;
    userId: string;
  }) => {
    createAlbum({
      variables: {
        input: {
          title,
          userId,
        },
      },
    });
  };

  const handleCancel = () => navigate("/albums");

  return (
    <MainPageLayout title="Create album" headerButton={<NavButton />}>
      <Layout>
        <Content className="h-100">
          <Col className="h-100">
            <Row className="h-100" justify="start" align="middle">
              <AlbumEditForm
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                loading={loading}
                called={called}
                error={error}
              />
            </Row>
          </Col>
        </Content>
      </Layout>
    </MainPageLayout>
  );
};

export default DeleteAlbumPage;
