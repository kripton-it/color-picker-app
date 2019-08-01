import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = ({ color, name, onDelete, classes }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={onDelete} />
      </div>
    </div>
  );
};

export default withStyles(styles)(SortableElement(DraggableColorBox));
