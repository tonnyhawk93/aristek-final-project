/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type GetAlbumQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetAlbumQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id">>;
    }
  >;
};

export type EditAlbumMutationVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  input: Types.UpdateAlbumInput;
}>;

export type EditAlbumMutation = {
  updateAlbum?: Types.Maybe<Pick<Types.Album, "id" | "title">>;
};
