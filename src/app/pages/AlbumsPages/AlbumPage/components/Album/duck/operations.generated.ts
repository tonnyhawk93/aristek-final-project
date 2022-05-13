/* eslint-disable */
import * as Types from "../../../../../../../schema.generated";

export type GetAlbumFullQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  page: Types.Scalars["Int"];
  size: Types.Scalars["Int"];
}>;

export type GetAlbumFullQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id" | "name" | "username">>;
      photos?: Types.Maybe<{
        data?: Types.Maybe<
          Array<
            Types.Maybe<
              Pick<Types.Photo, "id" | "title" | "url" | "thumbnailUrl">
            >
          >
        >;
        meta?: Types.Maybe<Pick<Types.PageMetadata, "totalCount">>;
      }>;
    }
  >;
};
