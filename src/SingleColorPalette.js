import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import { extractShadesFromPalette } from "./colorHelpers";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
    this._extractedColors = extractShadesFromPalette(
      this.props.palette,
      this.props.colorID
    );
  }

  changeFormat = format => {
    this.setState({ format });
  };

  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this._extractedColors.map(color => (
      <ColorBox key={color.name} format={format} {...color} isSinglePalette />
    ));
    console.log(colorBoxes);
    return (
      <div className="Palette SingleColorPalette">
        <Navbar changeFormat={this.changeFormat} isSinglePalette />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
