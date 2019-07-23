import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";

import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  redirectToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes, classes } = this.props;
    const { paletteList, container, navbar, list } = classes;

    return (
      <div className={paletteList}>
        <div className={container}>
          <nav className={navbar}>
            <h1>React Color Picker</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <ul className={list}>
            {palettes.map(palette => (
              <li key={palette.id}>
                <MiniPalette
                  {...palette}
                  handleClick={this.redirectToPalette}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
