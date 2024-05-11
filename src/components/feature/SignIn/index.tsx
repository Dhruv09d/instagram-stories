import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./styles";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data: SignInFormData) => {};

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.signIn}>Sign In</Box>
      <Box sx={styles.heading}>Welcome! to Instagram</Box>
    </Box>
  );
};

export default SignIn;
