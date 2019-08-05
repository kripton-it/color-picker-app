import chroma from "chroma-js";
import sizes from "../utils/mediaQueries";

export default {
  root: {
    height: "25%",
    width: "20%",
    position: "relative",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "5%"
    },
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: props =>
      chroma(props.color).luminance() <= 0.1 ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
    cursor: 'pointer'
  }
};