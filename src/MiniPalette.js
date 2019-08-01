import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./styles/MiniPaletteStyles";

const MiniPalette = ({
  classes,
  paletteName,
  id,
  emoji,
  colors,
  handleClick
}) => {
  const { miniPalette, colorBoxes, title, emo, miniColorBox, deleteButton, deleteIcon } = classes;
  const miniColorBoxesJSX = colors.map(({ color, name }) => (
    <div
      className={miniColorBox}
      key={name}
      style={{
        backgroundColor: color
      }}
    />
  ));

  const handlePaletteClick = () => {
    handleClick(id);
  }

  return (
    <div className={miniPalette} onClick={handlePaletteClick}>
      <div className={deleteButton}>
        <DeleteIcon className={deleteIcon} />
      </div>
      <div className={colorBoxes}>{miniColorBoxesJSX}</div>
      <h5 className={title}>
        {paletteName}
        <span className={emo}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
