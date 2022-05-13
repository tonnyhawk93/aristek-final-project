import React from "react";
import { useQuery } from "@apollo/client";
import { Tabs, Table, Image } from "antd";
import { uniqueId } from "lodash";
import { useParams, useSearchParams } from "react-router-dom";
import ErrorMessage from "app/components/ErrorMessage";
import Spinner from "app/components/Spinner";
import { DEFAULT_PAGES_SIZE, DEFAULT_CURRENT_PAGE } from "app/constants";
import { notEmpty } from "app/helpers";
import { operations, Types } from "./duck";

const { TabPane } = Tabs;

const Album = () => {
  const { id = "" } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, previousData, loading } = useQuery<
    Types.GetAlbumFullQuery,
    Types.GetAlbumFullQueryVariables
  >(operations.getAlbumFull, {
    fetchPolicy: "cache-and-network",
    variables: {
      id,
      page: Number(searchParams.get("page")) || DEFAULT_CURRENT_PAGE,
      size: Number(searchParams.get("size")) || DEFAULT_PAGES_SIZE,
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

  const handleChangePage = (page: number, size: number) => {
    setSearchParams({
      page: String(page),
      size: String(size),
    });
  };

  if (!previousData && loading) {
    return <Spinner />;
  }

  if (
    data?.album?.photos?.data?.length ||
    previousData?.album?.photos?.data?.length
  ) {
    let filteredData;
    let filteredPreviousData;

    if (data?.album?.photos?.data?.length) {
      filteredData = data?.album?.photos?.data.filter(notEmpty);
    }

    if (previousData?.album?.photos?.data?.length) {
      filteredPreviousData = previousData?.album?.photos?.data.filter(notEmpty);
    }

    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Basic" key="1">
          <p>ID: {data?.album?.id}</p>
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
            dataSource={filteredData || filteredPreviousData}
            loading={loading}
            pagination={{
              current: Number(searchParams.get("page")) || DEFAULT_CURRENT_PAGE,
              pageSize: Number(searchParams.get("size")) || DEFAULT_PAGES_SIZE,
              onChange: handleChangePage,
              total:
                data?.album?.photos?.meta?.totalCount ||
                previousData?.album?.photos?.meta?.totalCount ||
                0,
            }}
          />
        </TabPane>
      </Tabs>
    );
  }

  return <ErrorMessage />;
};

export default Album;
