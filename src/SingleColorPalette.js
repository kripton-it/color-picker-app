import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import { extractShadesFromPalette } from "./colorHelpers";

import styles from "./styles/PaletteStyles";

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
    const { palette, paletteColors, goBack } = this.props.classes;
    const { format } = this.state;
    const colorBoxes = this._extractedColors.map(color => (
      <ColorBox key={color.name} format={format} {...color} isSinglePalette />
    ));

    return (
      <div className={palette}>
        <Navbar changeFormat={this.changeFormat} isSinglePalette />
        <div className={paletteColors}>
          {colorBoxes}
          <div className={goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
