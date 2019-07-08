import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal',
    '& h1': {
      color: 'red'
    }
  }
};

const MiniPalette = (props) => {
  const {main} = props.classes;

  return (
    <div className={main}>
      <h1>Mini Palette</h1>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);