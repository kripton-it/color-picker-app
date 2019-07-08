import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const {palettes} = this.props;
    const links = palettes.map(palette => <MiniPalette key={palette.id} {...palette} />);
    // <Link to={`/palette/${id}`}>{paletteName}</Link>

    return <div className="PaletteList">{links}</div>;
  }
}

export default PaletteList;
