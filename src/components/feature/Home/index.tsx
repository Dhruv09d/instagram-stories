import { Box } from "@mui/material";
import { storiesData } from "constants/dummyData";
import Stories from "../Stories";
import styles from "./styles";
import Carousel from "components/common/Carousel";

const Home = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box
        sx={styles.image}
        component="img"
        src="/assets/images/Logo-Instagram.png"
        alt="instagram"
      />
      <Stories storiesData={storiesData} />
    </Box>
  );
};

export default Home;
