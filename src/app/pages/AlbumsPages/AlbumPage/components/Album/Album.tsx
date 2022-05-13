import React from "react";
import { useQuery } from "@apollo/client";
import { Tabs, Table, Image } from "antd";
import { uniqueId } from "lodash";
import { useParams } from "react-router-dom";
import ErrorMessage from "app/components/ErrorMessage";
import Spinner from "app/components/Spinner";
import { notEmpty } from "app/helpers";
import { operations, Types } from "./duck";

const { TabPane } = Tabs;

const Album = () => {
  const { id = "" } = useParams();

  const { data, previousData, loading } = useQuery<
    Types.GetAlbumFullQuery,
    Types.GetAlbumFullQueryVariables
  >(operations.getAlbumFull, {
    fetchPolicy: "cache-and-network",
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

  if ((!data && !previousData) || loading) {
    return <Spinner />;
  }

  if (data?.album?.photos?.data && data?.album?.photos?.data.length) {
    const filteredData = data?.album?.photos?.data.filter(notEmpty);

    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Basic" key="1">
          <p>ID: {data.album.id}</p>
          <p>
            USER: {data?.album?.user?.name} ({data?.album?.user?.username})
          </p>
        </TabPane>
        <TabPane tab="Photos" key="2">
          <Table
            columns={columns}
            rowKey={(record: { id?: string } | void) =>
              record?.id ?? uniqueId()
            }
            dataSource={filteredData}
            loading={loading}
          />
        </TabPane>
      </Tabs>
    );
  }

  return <ErrorMessage />;
};

export default Album;
