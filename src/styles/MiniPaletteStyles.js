export default {
  miniPalette: {
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid black",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: '1'
    }
  },
  colorBoxes: {
    backgroundColor: '#dae1e4',
    height: '130px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "flex-start",
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emo: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColorBox: {
    width: '20%',
    height: '25%',
    position: 'relative',
    marginBottom: '-3.5px',
  },
  deleteButton: {
    
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    borderRadius: '5px',
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '10px',
    zIndex: '10',
    opacity: '0',
    transition: 'all 0.3s ease-in-out'
  }
};