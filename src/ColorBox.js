import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  changeCopyState = () => {
    this.setState(
      {
        copied: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            copied: false
          });
        }, 3000);
      }
    );
  };

  render() {
    const { format, name } = this.props;
    const { copied } = this.state;
    const color = this.props[format];

    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div style={{ backgroundColor: color }} className="ColorBox">
          <div
            className={`copy-overlay${copied ? " show" : ""}`}
            style={{ backgroundColor: color }}
          />
          <div className={`copy-message${copied ? " show" : ""}`}>
            <h1>Copied!</h1>
            <p>{color}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;

/* При желании, можно обернуть в CopyToClipboard только кнопку Copy */
