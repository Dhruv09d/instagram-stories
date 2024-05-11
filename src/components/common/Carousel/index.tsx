import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import ReactMultiCarousel, { ResponsiveType } from "react-multi-carousel";
import styles from "./styles";
import "react-multi-carousel/lib/styles.css";

type CarouselProps = {
  children: ReactNode;
  responsive?: ResponsiveType;
  infinite?: boolean;
  draggable?: boolean;
  swipeable?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  showDots?: boolean;
  removeArrowOnDeviceType?: string | string[];
};

const CustomRightArrow = () => {
  return (
    <Box>
      <ArrowForwardIosSharpIcon sx={styles.arrowBtn} />
    </Box>
  );
};
const CustomLeftArrow = () => {
  return (
    <Box>
      <ArrowBackIosSharpIcon sx={styles.arrowBtn} />
    </Box>
  );
};

const Carousel = ({
  children,
  responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  },
  infinite = false,
  draggable = false,
  swipeable = true,
  autoPlay = false,
  autoPlaySpeed = 5000,
  showDots = false,
  removeArrowOnDeviceType = ["tablet"],
}: CarouselProps) => {
  return (
    <Box sx={styles.wrapper}>
      <ReactMultiCarousel
        responsive={responsive}
        infinite={infinite}
        draggable={draggable}
        swipeable={swipeable}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        showDots={showDots}
        removeArrowOnDeviceType={removeArrowOnDeviceType}
        // itemClass="caraousel-items"
      >
        {children}
      </ReactMultiCarousel>
    </Box>
  );
};

export default Carousel;
