import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./styles";
import Button from "components/common/Button";
import { loginUser, logoutUser } from "redux/actions";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignIn = () => {
    dispatch(loginUser(""))    
     history.replace('/')

  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.signIn}>Sign In</Box>
      <Box sx={styles.heading}>Welcome! to Instagram</Box>\
      <Button label="Login" onClick={handleSignIn} />
    </Box>
  );
};

export default SignIn;
