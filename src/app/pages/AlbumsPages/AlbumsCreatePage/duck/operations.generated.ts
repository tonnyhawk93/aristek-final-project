/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type CreateAlbumMutationVariables = Types.Exact<{
  input: Types.CreateAlbumInput;
}>;

export type CreateAlbumMutation = {
  createAlbum?: Types.Maybe<Pick<Types.Album, "id" | "title">>;
};
