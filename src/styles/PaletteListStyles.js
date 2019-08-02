import sizes from "../utils/mediaQueries";
import bg from './bg.svg';

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: 'opacity 0.5s ease-out'
    }
  },
  paletteList: {
    backgroundColor: "#2022aa",
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'auto'
  },
  container: {
    width: "50%",
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    [sizes.down("xl")]: {
      width: "60%"
    },
    [sizes.down("md")]: {
      width: "70%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    "& a": {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  heading: {
    fontSize: '2rem'
  },
  list: {
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
      gridGap: '1.5rem',
    }
  }
};