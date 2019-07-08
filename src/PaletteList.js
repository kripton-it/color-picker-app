import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";

const styles = {
  paletteList: {
    backgroundColor: "blue",
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: "50%",
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    // flexWrap: 'wrap',
  },
  navbar: {
    display: 'flex',
    // width: '100%',
    justifyContent: 'space-between',
    color: 'white',
  },
  list: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '5%',
    boxSizing: 'border-box',
    // width: '100%',
  }
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    const { paletteList, container, navbar, list } = classes;
    // <Link to={`/palette/${id}`}>{paletteName}</Link>

    return (
      <div className={paletteList}>
        <div className={container}>
          <nav className={navbar}>
            <h1>React Color Picker</h1>
          </nav>
          <ul className={list}>
            {palettes.map(palette => (
              <li key={palette.id}>
                <MiniPalette {...palette} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
