import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";

function App() {
  const palette = generatePalette(seedColors[1]);
  return (
    <div className="App">
      <Palette {...palette}/>
    </div>
  );
}

export default App;
