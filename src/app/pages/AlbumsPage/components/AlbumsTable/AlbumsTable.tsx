import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Table, Space } from "antd";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { ErrorMessage, Spinner } from "app/components";
import { DEFAULT_PAGES_SIZE, DEFAULT_CURRENT_PAGE } from "app/constants";
import { operations, Types } from "./duck";

const AlbumsTable: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, previousData, loading, error } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums, {
    variables: {
      page: Number(searchParams.get("page")) || DEFAULT_CURRENT_PAGE,
      size: Number(searchParams.get("size")) || DEFAULT_PAGES_SIZE,
    },
  });

  const navigate = useNavigate();

  const [deleteAlbum, { loading: loadingDeleteInfo }] = useMutation<
    Types.DeleteAlbumMutation,
    Types.DeleteAlbumMutationVariables
  >(operations.deleteAlbum);

  const handleDeleteAlbum = (id: string) => deleteAlbum({ variables: { id } });

  const handleChangePage = (page: number, size: number) => {
    const newParams = { page: String(page), size: String(size) };
    const search = `?${createSearchParams(newParams)}`;
    setSearchParams(search);
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

  if (error) {
    return <ErrorMessage />;
  }

  if (loading && !data && !previousData) {
    return <Spinner />;
  }

  return (
    <Table
      columns={columns}
      rowKey={(record: { id: string }) => record?.id}
      /* eslint-disable-next-line @typescript-eslint/no-array-constructor */
      dataSource={
        data?.albums?.data || previousData?.albums?.data || new Array()
      }
      loading={loading || loadingDeleteInfo}
      pagination={{
        current: Number(searchParams.get("page")) || DEFAULT_CURRENT_PAGE,
        pageSize: Number(searchParams.get("size")) || DEFAULT_PAGES_SIZE,
        onChange: handleChangePage,
        total:
          data?.albums?.meta?.totalCount ||
          previousData?.albums?.meta?.totalCount ||
          0,
      }}
    />
  );
};

export default AlbumsTable;
