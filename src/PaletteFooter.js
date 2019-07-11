import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  paletteFooter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
    height: "4vh",
    fontWeight: "500"
  },
  paletteEmoji: {
    fontSize: "1.5rem",
    margin: "0.1rem"
  }
};

const PaletteFooter = ({ paletteName, emoji, classes }) => {
  const { paletteFooter, paletteEmoji } = classes;
  return (
    <footer className={paletteFooter}>
      {paletteName}
      <span className={paletteEmoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
