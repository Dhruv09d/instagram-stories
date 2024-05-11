import { SxProps } from "@mui/material";

export type Styles = {
  [key: string]: SxProps;
};

export enum MediaType {
  IMAGE = "image",
  VIDEO = "video",
}

export type StoryType = {
  featuredImage: string;
  userName: string;
  isVisited?: boolean;
};

export type StoryDataType = {
  mediaType: MediaType;
  src: string;
};

export type StoriesTypes = {
  id: string;
  metaData: StoryType;
  stories: StoryDataType[];
};
