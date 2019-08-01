import chroma from "chroma-js";
import sizes from "../utils/mediaQueries";

export default {
  colorBox: {
    width: "20%",
    height: ({ isSinglePalette }) => (isSinglePalette ? "50%" : "25%"),
    position: "relative",
    "&:hover button": {
      opacity: "1"
    },
    [sizes.down("lg")]: {
      width: ({ isSinglePalette }) => (isSinglePalette ? "20%" : "25%"),
      height: ({ isSinglePalette }) => (isSinglePalette ? "50%" : "20%")
    },
    [sizes.down("md")]: {
      width: "50% !important",
      height: ({ isSinglePalette }) => (isSinglePalette ? "20%" : "10%")
    },
    [sizes.down("xs")]: {
      width: "100% !important",
      height: ({ isSinglePalette }) => (isSinglePalette ? "10%" : "5%")
    },
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "black",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase"
  },
  colorName: {
    color: props =>
      chroma(props[props.format]).luminance() <= 0.1 ? "white" : "black"
  },
  seeMore: {
    position: "absolute",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    border: "none",
    color: props =>
      chroma(props[props.format]).luminance() >= 0.5
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    cursor: "pointer",
    textTransform: "uppercase"
  },
  copyButton: {
    position: "absolute",
    display: "inline-block",
    width: "100px",
    height: "30px",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    textTransform: "uppercase",
    opacity: "0",
    transition: "opacity 0.5s",
    color: props =>
      chroma(props[props.format]).luminance() >= 0.5
        ? "rgba(0, 0, 0, 0.5)"
        : "white"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform 0.8s ease-in-out"
  },
  showOverlay: {
    position: "absolute",
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)"
  },
  copyMessage: {
    position: "fixed",
    zIndex: "-1",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0)",
    opacity: "0",
    color: "white",
    transition: "transform 0.7s 0.8s ease-in-out",
    "& h1": {
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      fontWeight: "400",
      textShadow: "1px 2px black",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      textTransform: "uppercase",
      color: props =>
        chroma(props[props.format]).luminance() >= 0.5 ? "black" : "white"
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    },
    [sizes.down("xs")]: {
      fontSize: "2rem",
    }
  },
  showMessage: {
    transform: "scale(1)",
    opacity: "1",
    zIndex: "25"
  }
};
