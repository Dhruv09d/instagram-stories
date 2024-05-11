import { Box, SxProps } from "@mui/material";
import styles from "./styles";
import { StoryType } from "types/common";

export type StoryProps = StoryType;

const Story = ({ featuredImage, isVisited, userName }: StoryProps) => {
  return (
    <>
      <Box
        sx={{
          ...styles.wrapper,
        }}
      >
        <Box
          sx={styles.image}
          component="img"
          src={featuredImage}
          alt="instagram"
        />
      </Box>
      <Box sx={styles.username}>{userName}</Box>
    </>
  );
};

export default Story;
