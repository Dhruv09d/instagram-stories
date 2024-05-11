import { Box } from "@mui/material";
import { MediaType, StoryDataType } from "types/common";
import styles from "./styles";

type StoryDetailViewProps = StoryDataType;

const StoryDetailView = ({ mediaType, src }: StoryDetailViewProps) => {
  return (
    <Box>
      {mediaType === MediaType.IMAGE ? (
        <Box component="img" src={src} alt={src} sx={styles.image} />
      ) : (
        // here we can implement video
        <></>
      )}
    </Box>
  );
};

export default StoryDetailView;
