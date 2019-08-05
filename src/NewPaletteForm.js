import React, { Component } from "react";
import classNames from "classnames";
import DraggableColorList from "./DraggableColorList";
import NewPaletteFormNav from "./NewPaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { arrayMove } from "react-sortable-hoc";

import seedColors from "./utils/seedColors";
import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColorsNumber: 20
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: seedColors[0].colors
    };
  }

  handleSubmit = palette => {
    const newPalette = {
      ...palette,
      colors: this.state.colors,
      id: palette.paletteName.toLowerCase().replace(/ /g, "-")
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };

  addNewColor = newColor => {
    this.setState({
      colors: [...this.state.colors, newColor]
    });
  };

  deleteColor = colorName => {
    this.setState({
      colors: this.state.colors.filter(({ name }) => name !== colorName)
    });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  clearColors = () => {
    this.setState({
      colors: []
    });
  };

  addRandomColor = () => {
    // собираем все цвета из всех палитр и выбираем те, которых нет в текущей палитре
    const allColors = this.props.palettes
      .map(({ colors }) => colors)
      .flat()
      .filter(({ name }) =>
        this.state.colors.every(color => color.name !== name)
      );
    const randomIndex = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[randomIndex];
    this.setState({
      colors: [...this.state.colors, randomColor]
    });
  };

  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes, maxColorsNumber, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length === maxColorsNumber;

    return (
      <div className={classes.root}>
        <NewPaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={this.clearColors}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={this.addRandomColor}
                disabled={isPaletteFull || palettes.length === 0}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              colors={colors}
              isPaletteFull={isPaletteFull}
              addNewColor={this.addNewColor}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            deleteColor={this.deleteColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
