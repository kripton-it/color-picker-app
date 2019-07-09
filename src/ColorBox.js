import React, { Component } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
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

  handleClick = evt => {
    evt.stopPropagation();
  };

  render() {
    const { format, name, moreURL } = this.props;
    const { copied } = this.state;
    const color = this.props[format];
    const isDarkColor = chroma(color).luminance() <= 0.1;
    const isLightColor = chroma(color).luminance() >= 0.5;
    const moreLink = moreURL ? (
      <Link to={moreURL} onClick={this.handleClick}>
        <span className={`see-more${isLightColor ? " dark-text" : ""}`}>
          More
        </span>
      </Link>
    ) : null;

    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div style={{ backgroundColor: color }} className="ColorBox">
          <div
            className={`copy-overlay${copied ? " show" : ""}`}
            style={{ backgroundColor: color }}
          />
          <div
            className={`copy-message${copied ? " show" : ""}${
              isLightColor ? " dark-text" : ""
            }`}
          >
            <h1>Copied!</h1>
            <p>{color}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor ? "light-text" : ""}>{name}</span>
            </div>
            <button
              className={`copy-button${isLightColor ? " dark-text" : ""}`}
            >
              Copy
            </button>
          </div>
          {moreLink}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;

/* При желании, можно обернуть в CopyToClipboard только кнопку Copy */
