import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

import chroma from "chroma-js";
import "./ColorBox.css";

const styles = {
  colorBox: {
    width: "20%",
    height: ({ isSinglePalette }) => (isSinglePalette ? "50%" : "25%"),
    position: "relative",
    "&:hover button": {
      opacity: "1"
    }
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "black",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase"
  },
  colorName: {
    color: props =>
      chroma(props[props.format]).luminance() <= 0.1 ? "white" : "black"
  },
  seeMore: {
    position: "absolute",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    border: "none",
    color: props =>
      chroma(props[props.format]).luminance() >= 0.5
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    cursor: "pointer",
    textTransform: "uppercase"
  },
  copyButton: {
    position: "absolute",
    display: "inline-block",
    width: "100px",
    height: "30px",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    textTransform: "uppercase",
    opacity: "0",
    transition: "opacity 0.5s",
    color: props =>
      chroma(props[props.format]).luminance() >= 0.5
        ? "rgba(0, 0, 0, 0.5)"
        : "white"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform 0.8s ease-in-out"
  },
  showOverlay: {
    position: "absolute",
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)"
  },
  copyMessage: {
    position: "fixed",
    zIndex: "-1",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0)",
    opacity: "0",
    color: "white",
    transition: "transform 0.7s 0.8s ease-in-out",
    "& h1": {
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      fontWeight: "400",
      textShadow: "1px 2px black",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      textTransform: "uppercase",
      color: props =>
        chroma(props[props.format]).luminance() >= 0.5 ? "black" : "white"
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    }
  },
  showMessage: {
    transform: "scale(1)",
    opacity: "1",
    zIndex: "25"
  }
};

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
