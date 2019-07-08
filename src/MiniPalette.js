import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  miniPalette: {
    backgroundColor: "white",
    borderRadius: "5px",
    border: '1px solid black',
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer"
  },
  colors: {
    backgroundColor: "grey"
  },
  title: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emo: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  }
};

const MiniPalette = ({ classes, paletteName, emoji }) => {
  const { miniPalette, colors, title, emo } = classes;

  return (
    <div className={miniPalette}>
      <div className={colors} />
      <h5 className={title}>
        {paletteName}
        <span className={emo}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
