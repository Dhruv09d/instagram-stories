import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    borderColor: "red",
    borderWidth: "1px",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },

  image: {
    height: "60px",
    width: "60px",
    objectFit: "fill",
    borderRadius: "50%",
  },

  username: {
    fontSize: "8px",
    margin: "3px 0",
    maxWidth: "70px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center",
  },

  visited: {
    borderColor: "custom.border.main",
  },
};

export default styles;
