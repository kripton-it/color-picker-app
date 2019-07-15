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
  },
  navbar: {
    display: 'flex',
    // width: '100%',
    justifyContent: 'space-between',
    color: 'white',
  },
  list: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '5%',
    boxSizing: 'border-box',
    // width: '100%',
  }
};