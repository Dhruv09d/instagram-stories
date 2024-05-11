import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // maxWidth: "632px",
    width: "100%",
    height: "100%",
    backgroundColor: "text.white",
    borderRadius: "5px",
    padding: "20px 64px",
    "& .MuiBackdrop-root": {
      backgroundColor: "#fff",
    },
  },

  closeIcon: {
    cursor: "pointer",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heading: {
    fontWeight: 500,
    fontSize: "14px",
  },

  visited: {
    borderColor: "custom.border.main",
  },
};

export default styles;
