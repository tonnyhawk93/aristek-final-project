import React from "react";
import { MainPageLayout, AlbumsTable, NavButton } from "app/components";

const AlbumsPage = () => {
  return (
    <MainPageLayout
      title="Albums"
      headerButton={<NavButton title="Create album" pathTo="/albums/create" />}
    >
      <AlbumsTable />
    </MainPageLayout>
  );
};
export default AlbumsPage;
