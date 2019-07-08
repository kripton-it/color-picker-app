import React, { Component } from "react";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {match} = this.props;
    
    return (
      <h1>
        Single Color Page: {match.params.paletteID},{match.params.colorID}
      </h1>
    );
  }
}

export default SingleColorPalette;

/*

import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

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
    const { level, format } = this.state;
    const { colors, paletteName, emoji, location } = this.props;
    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.id} format={format} location={location} {...color} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;


*/
