import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div style={{backgroundColor: this.props.background.color}} className="ColorBox">
        <div>{this.props.background.name}</div>
      </div>
    );
  }
}

export default ColorBox;