import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
  }

  changeLevel = value => {
    this.setState({
      level: value
    });
  };

  render() {
    const { level } = this.state;
    const colorBoxes = this.props.colors[level].map(color => (
      <ColorBox {...color} />
    ));
    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={this.changeLevel}
        />
        {/* Navbar will be here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer will be here */}
      </div>
    );
  }
}

export default Palette;
