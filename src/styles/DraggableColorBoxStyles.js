export default {
  root: {
    height: "25%",
    width: "20%",
    position: "relative",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    fontSize: "12px",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};