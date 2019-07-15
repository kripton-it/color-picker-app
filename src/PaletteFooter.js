import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./styles/PaletteFooterStyles";

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
