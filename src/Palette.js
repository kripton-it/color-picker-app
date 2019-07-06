import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const colorBoxes = this.props.colors.map(({color, name}) => <ColorBox background={color} name={name} />)
    return (
      <div className="Palette">
        {/* Navbar will be here */}
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        {/* Footer will be here */}
      </div>
    );
  }
}

export default Palette;