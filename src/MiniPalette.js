import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  miniPalette: {
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid black",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer"
  },
  colorBoxes: {
    backgroundColor: '#dae1e4',
    height: '130px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "flex-start",
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emo: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColorBox: {
    width: '20%',
    height: '25%',
    position: 'relative',
    marginBottom: '-3.5px',
  }
};

const MiniPalette = ({ classes, paletteName, id, emoji, colors, handleClick }) => {
  const { miniPalette, colorBoxes, title, emo, miniColorBox } = classes;
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
    <div className={miniPalette} onClick={() => handleClick(id)}>
      <div className={colorBoxes}>{miniColorBoxesJSX}</div>
      <h5 className={title}>
        {paletteName}
        <span className={emo}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
