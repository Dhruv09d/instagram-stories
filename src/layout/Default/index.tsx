import { Box } from "@mui/material";
import { ReactNode } from "react";
import styles from "./styles";
type DefaultLayoutProps = {
  children?: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box sx={styles.layout}>
      <Box>{children}</Box>
    </Box>
  );
};

export default DefaultLayout;
