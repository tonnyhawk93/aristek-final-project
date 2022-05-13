/* eslint-disable */

declare module "*/operations.gql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const getUsers: DocumentNode;
  export const getAlbumFull: DocumentNode;
  export const getAlbumTitle: DocumentNode;
  export const createAlbum: DocumentNode;
  export const getAlbum: DocumentNode;
  export const editAlbum: DocumentNode;
  export const getAlbums: DocumentNode;
  export const deleteAlbum: DocumentNode;

  export default defaultDocument;
}
