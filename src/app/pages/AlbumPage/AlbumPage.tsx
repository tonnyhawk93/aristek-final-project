import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { MainPageLayout, NavButton, Spinner } from "app/components";
import { Album } from "./components";
import { operations, Types } from "./duck";

const AlbumPage = () => {
  const { id = "" } = useParams();

  const { data, loading } = useQuery<
    Types.GetAlbumTitleQuery,
    Types.GetAlbumTitleQueryVariables
  >(operations.getAlbumTitle, {
    variables: {
      id,
    },
  });

  return (
    <MainPageLayout
      title={`Album: ${data?.album?.title || ""}`}
      headerButton={<NavButton />}
    >
      {loading ? <Spinner /> : <Album />}
    </MainPageLayout>
  );
};

export default AlbumPage;
