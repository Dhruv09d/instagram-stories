import { Box } from "@mui/material";
import Carousel from "components/common/Carousel";
import Modal from "components/common/Modal";
import Story from "components/common/Story";
import StoryDetailView from "components/common/StoryDetailView";
import { useState } from "react";
import { StoriesTypes } from "types/common";
import styles from "./styles";

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

  const handleNextStory = () => {
    const currStoryIdx = storiesData.findIndex(
      (item) => item.id === currStory.id,
    );

    if (currStoryIdx === storiesData.length - 1) {
      setCurrStory(storiesData[0]);
      return;
    }
    if (currStoryIdx < storiesData.length - 1) {
      setCurrStory(storiesData[currStoryIdx + 1]);
      return;
    }

    setOpenModal(false);
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
          <Box sx={styles.story}>
            <Carousel
              autoPlay
              infinite
              autoPlaySpeed={2000}
              onLastItemSwipe={handleNextStory}
              responsive={{
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                },
              }}
            >
              {currStory.stories.map((item) => (
                <StoryDetailView
                  {...item}
                  key={`${currStory.id}_${item.src}`}
                />
              ))}
            </Carousel>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default Stories;
