import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    alignSelf: "center",
    margin: "-15px",
  },

  btnStyles: {
    minWidth: "150px",
    margin: "10px 0",
    height: "28px",
    color: "black",
    boxShadow: "none",
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },

  icon: {
    marginRight: "4px",
  },
};

export default styles;
