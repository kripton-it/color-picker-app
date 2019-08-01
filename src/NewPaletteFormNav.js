import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from "./PaletteMetaForm";

import styles from "./styles/NewPaletteFormNavStyles";

class NewPaletteFormNav extends Component {
  state = {
    isDialogOpen: false
  };

  focus = () => {
    const interval = setInterval(() => {
      const input = document.querySelector("#input");
      if (input) {
        input.focus();
        clearInterval(interval);
      }
    }, 100);
  }

  showDialog = () => {
    this.setState({
      isDialogOpen: true
    }, this.focus);
  };

  closeDialog = () => {
    this.setState({
      isDialogOpen: false
    });
  };

  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      handleSubmit,
      palettes
    } = this.props;
    const { isDialogOpen } = this.state;
    const dialog = isDialogOpen ? (
      <PaletteMetaForm
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleClose={this.closeDialog}
      />
    ) : null;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/">
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Go Back
              </Button>
            </Link>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.showDialog}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {dialog}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNav);
