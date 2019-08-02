import sizes from "../utils/mediaQueries";

export default {
  paletteFooter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
    height: "4vh",
    fontWeight: "500",
    [sizes.down("xs")]: {
      display: 'none'
    }
  },
  paletteEmoji: {
    fontSize: "1.5rem",
    margin: "0.1rem"
  }
};