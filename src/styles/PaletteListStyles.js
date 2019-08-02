import sizes from "../utils/mediaQueries";

export default {
  paletteList: {
    backgroundColor: "blue",
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: "50%",
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  navbar: {
    display: 'flex',
    // width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    "& a": {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  list: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2.5rem',
    boxSizing: 'border-box',
    // width: '100%',
    [sizes.down("md")]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridGap: '1rem',
    },
  }
};