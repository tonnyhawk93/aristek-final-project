import React from "react";
import { MainPageLayout, NavButton } from "app/components";
import { AlbumsTable } from "./components";

const AlbumsPage = () => {
  return (
    <MainPageLayout
      title="Albums"
      headerButton={<NavButton pathTo="/albums/create">Create album</NavButton>}
    >
      <AlbumsTable />
    </MainPageLayout>
  );
};
export default AlbumsPage;
