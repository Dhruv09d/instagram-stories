import { Styles } from "types/common";
import { experimental_sx as sx, styled } from "@mui/system";

const styles: Styles = {
  layout: {
    height: "100vh",
  },

  wrapper: {
    display: "flex",
    justifyContent: "left",
    alignItems: "start",
    height: "100%",
  },

  left: {
    backgroundColor: "custom.background.secondary",
    paddingTop: "154px",
    position: "fixed",
    height: "100%",
  },

  right: {
    flexBasis: "100%",
    padding: "70px 28px 20px",
  },

  sidebar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "stretch",
    fontSize: "14px",
    height: "100%",
    minWidth: "192px",
    "& a": {
      textDecoration: "none",
      color: "primary.main",
    },
  },

  divider: {
    backgroundColor: "#82b7f3",
    margin: "0 15px",
  },

  item: {
    lineHeight: "32px",
    padding: "24px 0px",
    textDecoration: "none",
  },

  active: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    borderWidth: "0 0 0 2px",
    borderStyle: "solid",
    padding: "0 26px",
  },

  icon: {
    marginRight: "8px",
  },

  footerWrapper: {
    position: "absolute",
    left: "15px",
    bottom: "65px",
    fontSize: "12px",
    fontWeight: 400,
  },

  topSection: {
    color: "palette.primary.main",
    textDecoration: "underline",
    display: "flex",
    flexDirection: "column",
  },

  bottomSection: {
    marginTop: "20px",
    color: "custom.misc.outerSpace",
  },

  phoneNoWrapper: {
    display: "flex",
    gap: "3px",
  },

  phoneNo: {
    textDecoration: "underline !important",
    color: "palette.primary.main",
  },

  secondaryFooterWrapper: {
    height: "60px",
    backgroundColor: "custom.background.main",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    textDecoration: "underline",
    fontSize: "12px",
    gap: "8px",
    "& a": {
      color: "#056ee6",
    },
  },
};

type MenuItemStyleProps = {
  matchedRoute: boolean;
};

export const MenuItem = styled("div", {
  shouldForwardProp: (prop) => prop !== "matchedRoute",
})(({ matchedRoute }: MenuItemStyleProps) =>
  sx({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    borderWidth: "0 0 0 2px",
    borderStyle: "solid",
    padding: "0 26px",
    borderColor: matchedRoute ? "primary.dark" : "white",
    color: matchedRoute ? "primary.main" : "custom.text.grayish",
    "& .icon": {
      marginRight: "8px",
    },
  }),
);

export default styles;
