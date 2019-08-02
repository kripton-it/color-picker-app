import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";

import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  redirectToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes, classes, deletePalette } = this.props;
    const { paletteList, container, navbar, list, heading } = classes;

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
                  deletePalette={deletePalette}
                  key={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
