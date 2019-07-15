import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import styles from "./styles/PaletteStyles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
  }

  changeLevel = value => {
    this.setState({
      level: value
    });
  };

  changeFormat = format => {
    this.setState({ format });
  };

  render() {
    const { classes } = this.props;
    const { palette, paletteColors } = classes;
    const { level, format } = this.state;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={color.id}
        format={format}
        moreURL={`/palette/${id}/${color.id}`}
        {...color}
      />
    ));
    return (
      <div className={palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className={paletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
