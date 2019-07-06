import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

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
    const { colors } = this.props;
    const colorBoxes = colors[level].map(color => <ColorBox {...color} />);
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={this.changeLevel}
          />
        </div>
        {/* Navbar will be here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer will be here */}
      </div>
    );
  }
}

export default Palette;
