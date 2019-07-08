import React from "react";
import { Switch, Route } from "react-router-dom";

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  // const palette = generatePalette(seedColors[1]);
  const findPalette = id => seedColors.find(palette => palette.id === id);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={({ match }) => (
            <Palette palette={generatePalette(findPalette(match.params.id))} />
          )}
        />
        <Route
          exact
          path="/palette/:paletteID/:colorID"
          render={({ match }) => (
            <SingleColorPalette
              palette={generatePalette(findPalette(match.params.paletteID))}
              colorID={match.params.colorID}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
