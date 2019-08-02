import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import MiniPalette from "./MiniPalette";

import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  state = {
    showDeleteDialog: false,
    paletteId: ''
  }

  openDialog = (id) => {
    this.setState({
      showDeleteDialog: true,
      paletteId: id
    })
  }

  closeDialog = () => {
    this.setState({
      showDeleteDialog: false,
      paletteId: ''
    })
  }

  deletePalette = () => {
    this.props.deletePalette(this.state.paletteId);
    this.closeDialog();
  }

  redirectToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes, classes } = this.props;
    const { paletteList, container, navbar, list, heading } = classes;
    const { showDeleteDialog } = this.state;

    return (
      <div className={paletteList}>
        <div className={container}>
          <nav className={navbar}>
            <h1 className={heading}>React Color Picker</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={list}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  handleClick={this.redirectToPalette}
                  key={palette.id}
                  openDialog={this.openDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={showDeleteDialog}
          onClose={this.closeDialog}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.deletePalette}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
