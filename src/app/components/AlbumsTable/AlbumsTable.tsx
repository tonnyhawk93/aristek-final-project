import * as React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Table, Space } from "antd";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import { Spinner, ErrorMessage } from "..";
import { operations, Types } from "./duck";

const AlbumsTable: React.FC = () => {
  const { data, loading } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums);

  const [deleteAlbum, { loading: loadingDeleteInfo }] = useMutation<
    Types.DeleteAlbumMutation,
    Types.DeleteAlbumMutationVariables
  >(operations.deleteAlbum);

  const handleDeleteAlbum = (id: string) => deleteAlbum({ variables: { id } });
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleChangePage = (page: number, size: number) => {
    const newParams = { page: String(page), size: String(size) };
    const search = `?${createSearchParams(newParams)}`;
    navigate({
      pathname: location.pathname,
      search,
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "User name",
      dataIndex: "user",
      key: "user",
      render: (user: { name: string }) => user.name,
    },
    {
      title: "Number of photos",
      key: "photos",
      dataIndex: "photos",
      render: (photos: { data: { id: string }[] }) => photos.data.length,
    },
    {
      title: "Action",
      key: "action",
      render: (props: { id: string }) => {
        return (
          <Space size="middle">
            <button
              type="button"
              onClick={() => navigate(`/albums/${props.id}`)}
            >
              Show
            </button>
            <button
              type="button"
              onClick={() => navigate(`/albums/${props.id}/edit`)}
            >
              Edit
            </button>
            <button type="button" onClick={() => handleDeleteAlbum(props.id)}>
              Delete
            </button>
          </Space>
        );
      },
    },
  ];

  if (!data || loading || loadingDeleteInfo) {
    return <Spinner />;
  }

  if (data.albums?.data) {
    const dataWithKeys = data.albums.data.map((el) => ({ ...el, key: el?.id }));

    return (
      <Table
        columns={columns}
        dataSource={dataWithKeys}
        pagination={{
          defaultCurrent: Number(params.get("page")) || 1,
          defaultPageSize: Number(params.get("size")) || 10,
          onChange: handleChangePage,
        }}
      />
    );
  }

  return <ErrorMessage />;
};

export default AlbumsTable;
