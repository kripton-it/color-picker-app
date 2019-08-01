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

const drawerWidth = 400;
// но лучше импортировать из одного места

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    }
  },
  button: {
    margin: "0 0.5rem"
  }
});

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
    
    // document.querySelector(`.${this.props.classes.root}`).querySelector('input').focus();
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
        open={isDialogOpen}
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
