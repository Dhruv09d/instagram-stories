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

export type StoriesTypes = {
  id: string;
  metaData: StoryType;
  stories: {
    mediaType: MediaType;
    src: string;
  }[];
};
