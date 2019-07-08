import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const {palettes} = this.props;
    const links = palettes.map(({ id, paletteName }) => (
      <div key={id}>
        <Link to={`/palette/${id}`}>{paletteName}</Link>
      </div>
    ));

    return <div className="PaletteList">{links}</div>;
  }
}

export default PaletteList;
