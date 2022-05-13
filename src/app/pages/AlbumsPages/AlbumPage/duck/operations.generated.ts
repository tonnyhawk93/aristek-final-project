/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type GetAlbumTitleQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetAlbumTitleQuery = {
  album?: Types.Maybe<Pick<Types.Album, "id" | "title">>;
};
