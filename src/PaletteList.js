import React, { Component } from "react";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const {palettes} = this.props;
    const paletteList = palettes.map(palette => <MiniPalette key={palette.id} {...palette} />);
    // <Link to={`/palette/${id}`}>{paletteName}</Link>

    return <div className="PaletteList">{paletteList}</div>;
  }
}

export default PaletteList;
