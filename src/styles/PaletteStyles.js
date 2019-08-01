import sizes from "../utils/mediaQueries";

export default {
  palette: {
    display: "flex",
    flexDirection: "column",
    width: "100wh",
    height: "100vh",
    overflow: "hidden"
  },
  paletteColors: {
    height: "90vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  goBack: {
    width: "20%",
    height: "50%",
    position: "relative",
    backgroundColor: "black",
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    },
    "& a": {
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
      fontSize: "1rem",
      lineHeight: "30px",
      color: "white",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      textTransform: "uppercase",
      transition: "background-color 0.5s",
      backgroundColor: "rgba(255, 255, 255, 0.4)"
    },
    "&:hover a": {
      backgroundColor: "rgba(255, 255, 255, 0.2)"
    }
  }
};
