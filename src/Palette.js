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
    const { colors } = this.props;
    const colorBoxes = colors[level].map(color => <ColorBox {...color} format={format} />);
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer will be here */}
      </div>
    );
  }
}

export default Palette;
