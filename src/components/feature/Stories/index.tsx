import { Box } from "@mui/material";
import styles from "./styles";
import Story from "components/common/Story";
import { StoriesTypes, StoryType } from "types/common";
import Carousel from "components/common/Carousel";
import Modal from "components/common/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

type StoriesProps = {
  storiesData: StoriesTypes[];
};

const Stories = ({ storiesData }: StoriesProps) => {
  const [currStory, setCurrStory] = useState<StoriesTypes | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleStoryAction = (item: StoriesTypes) => {
    setCurrStory(item);
    setOpenModal(true);
  };

  return (
    <Box sx={styles.wrapper}>
      <Carousel>
        {storiesData.map((item, idx) => (
          <Box onClick={() => handleStoryAction(item)} key={item.id}>
            <Story {...item.metaData} />
          </Box>
        ))}
      </Carousel>
      {currStory && (
        <Modal
          open={openModal}
          onCloseModal={() => setOpenModal(false)}
          heading={currStory.metaData.userName}
        >
          <Box sx={styles.story}></Box>
        </Modal>
      )}
    </Box>
  );
};

export default Stories;
