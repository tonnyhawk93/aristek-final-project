import React from "react";
import { useQuery } from "@apollo/client";
import { Tabs, Table, Image } from "antd";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../../../components/ErrorMessage";
import Spinner from "../../../../components/Spinner";
import { operations, Types } from "./duck";

const { TabPane } = Tabs;

const Album = () => {
  const { id = "" } = useParams();

  const { data, loading } = useQuery<
    Types.GetAlbumFullQuery,
    Types.GetAlbumFullQueryVariables
  >(operations.getAlbumFull, {
    variables: {
      id,
    },
  });

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
      title: "Image",
      render: (props: { url: string; thumbnailUrl: string }) => {
        return (
          <Image
            src={props.thumbnailUrl}
            width={150}
            preview={{ src: props.url }}
          />
        );
      },
    },
  ];

  if (!data || loading) {
    return <Spinner />;
  }

  if (data?.album?.photos?.data && data?.album?.photos?.data.length) {
    const dataWithKeys = data.album.photos.data.map((el) => ({
      ...el,
      key: el?.id,
    }));

    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Basic" key="1">
          <p>ID: {data.album.id}</p>
          <p>
            USER: {data?.album?.user?.name} ({data?.album?.user?.username})
          </p>
        </TabPane>
        <TabPane tab="Photos" key="2">
          <Table columns={columns} dataSource={dataWithKeys} />
        </TabPane>
      </Tabs>
    );
  }

  return <ErrorMessage />;
};

export default Album;
