import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
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

  handleClick = (evt) => {
    evt.stopPropagation();
  }

  render() {
    const { format, name, id, location } = this.props;
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
          <Link to={`${location.pathname}/${id}`} onClick={this.handleClick}>
            <span className="see-more">More</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;

/* При желании, можно обернуть в CopyToClipboard только кнопку Copy */
