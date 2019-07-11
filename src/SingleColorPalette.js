import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import { extractShadesFromPalette } from "./colorHelpers";

const styles = {
  palette: {
    display: "flex",
    flexDirection: "column",
    width: "100wh",
    height: "100vh",
    overflow: "hidden"
  },
  paletteColors: {
    height: "90vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  goBack: {
    width: "20%",
    height: "50%",
    position: "relative",
    backgroundColor: "black",
    "& a": {
      position: "absolute",
      display: "inline-block",
      width: "100px",
      height: "30px",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      fontSize: "1rem",
      lineHeight: "30px",
      color: "white",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      textTransform: "uppercase",
      transition: "background-color 0.5s",
      backgroundColor: "rgba(255, 255, 255, 0.4)"
    },
    "&:hover a": {
      backgroundColor: "rgba(255, 255, 255, 0.2)"
    }
  }
};

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
