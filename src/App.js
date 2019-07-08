import React from "react";
import { Switch, Route } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
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
          render={routeProps => (
            <Palette
              {...generatePalette(findPalette(routeProps.match.params.id))}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteID/:colorID"
          render={({ match }) => (
            <h1>
              Single Color Page: {match.params.paletteID},
              {match.params.colorID}
            </h1>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
