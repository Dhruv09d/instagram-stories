import { Box } from "@mui/material";
import { ReactNode } from "react";
import styles from "./styles";
type DefaultLayoutProps = {
  children?: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box sx={styles.layout}>
      <Box sx={styles.wrapper}>
        <Box>{children}</Box>
      </Box>{" "}
    </Box>
  );
};

export default DefaultLayout;
