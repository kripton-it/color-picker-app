import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    height: '25%',
    width: "20%",
    position: 'relative'
  }
}

const DraggableColorBox = ({ color, name, classes }) => {
  return <div className={classes.root} style={{ backgroundColor: color }}>{name}</div>;
};

export default withStyles(styles)(DraggableColorBox);
