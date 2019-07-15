import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    };
  }

  handleFormatChange = ({ target }) => {
    const format = target.value;
    this.setState({
      format,
      open: true
    });
    this.props.changeFormat(format);
  };

  closeSnackbar = () => {
    // По умолчанию событие onClose компонента Snackbar срабатывает и при клике вне
    // Иногда нужно отменить эту возможность:
    /* closeSnackbar = (event, reason) => {
          if (reason === "clickaway") {
            return;
          } */

    this.setState({
      open: false
    });
  };

  render() {
    const { level, changeLevel, isSinglePalette, classes } = this.props;
    const { Navbar, logo, slider, selectContainer } = classes;
    const { format, open } = this.state;
    const snackbarMessage = (
      <span id="message-id">Format Changed To {format.toUpperCase()}!</span>
    );
    const navbarSlider = !isSinglePalette ? (
      <div>
        <div className={slider}>
          <span>Level: {level}</span>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={changeLevel}
          />
        </div>
      </div>
    ) : null;
    return (
      <header className={Navbar}>
        <div className={logo}>
          <Link to="/">React Color Picker</Link>
        </div>
        {navbarSlider}
        <div className={selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={3000}
          message={snackbarMessage}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.closeSnackbar}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
