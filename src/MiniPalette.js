import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  handlePaletteClick = () => {
    this.props.handleClick(this.props.id);
  };

  handlePaletteDelete = evt => {
    evt.stopPropagation();
    this.props.openDialog(this.props.id);
  };

  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    console.log("RENDERING: ", paletteName);
    const {
      miniPalette,
      colorBoxes,
      title,
      emo,
      miniColorBox,
      deleteIcon
    } = classes;
    const miniColorBoxesJSX = colors.map(({ color, name }) => (
      <div
        className={miniColorBox}
        key={name}
        style={{
          backgroundColor: color
        }}
      />
    ));

    return (
      <div className={miniPalette} onClick={this.handlePaletteClick}>
        <DeleteIcon className={deleteIcon} onClick={this.handlePaletteDelete} />
        <div className={colorBoxes}>{miniColorBoxesJSX}</div>
        <h5 className={title}>
          {paletteName}
          <span className={emo}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
