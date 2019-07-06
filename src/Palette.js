import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
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
        <Navbar level={level} changeLevel={this.changeLevel}/>
        {/* Navbar will be here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer will be here */}
      </div>
    );
  }
}

export default Palette;
