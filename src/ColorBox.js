import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styles from "./styles/ColorBoxStyles";

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
    const { format, name, moreURL, isSinglePalette, classes } = this.props;
    const {
      colorBox,
      boxContent,
      colorName,
      seeMore,
      copyButton,
      copyOverlay,
      showOverlay,
      copyMessage,
      showMessage
    } = classes;
    const { copied } = this.state;
    const color = this.props[format];
    const moreLink = !isSinglePalette ? (
      <Link to={moreURL} onClick={this.handleClick}>
        <span className={seeMore}>More</span>
      </Link>
    ) : null;

    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div style={{ backgroundColor: color }} className={colorBox}>
          <div
            className={`${copyOverlay} ${copied ? showOverlay : ""}`}
            style={{ backgroundColor: color }}
          />
          <div className={`${copyMessage} ${copied ? showMessage : ""}`}>
            <h1>Copied!</h1>
            <p>{color}</p>
          </div>
          <div>
            <div className={boxContent}>
              <span className={colorName}>{name}</span>
            </div>
            <button className={copyButton}>Copy</button>
          </div>
          {moreLink}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);

/* При желании, можно обернуть в CopyToClipboard только кнопку Copy */
