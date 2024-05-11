import { Box } from "@mui/material";
import { ReactNode } from "react";
import styles from "./styles";

type AuthLayoutProps = {
  children?: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <Box
          sx={styles.image}
          component="img"
          src="/images/gerryLogo.png"
          alt="Gerry"
        />
      </Box>
      <Box sx={styles.main} className="children">
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
