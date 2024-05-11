import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "248px",
    "& .MuiInputBase-root": {
      width: "100% ",
    },
  },

  signIn: {
    fontSize: {
      xl: "30px",
      lg: "30px",
      md: "30px",
      sm: "30px",
      xs: "25px",
    },
    fontWeight: "bold",
    textAlign: {
      xl: "left",
      lg: "left",
      md: "left",
      sm: "left",
      xs: "center",
    },
  },

  heading: {
    marginTop: "16px",
    fontSize: "14px",
    fontWeight: "500",
    textAlign: {
      xl: "left",
      lg: "left",
      md: "left",
      sm: "left",
      xs: "center",
    },
  },

  input: {
    marginTop: "22px",
    "& .label": {
      position: "absolute",
    },

    "& .MuiInputBase-input ": {
      "&::-ms-reveal, &::-ms-clear": {
        display: "none",
      },
    },
  },

  signInBtn: {
    marginTop: "40px",
    marginBottom: "42px",
    backgroundColor: "primary.dark",
  },
};

export default styles;
