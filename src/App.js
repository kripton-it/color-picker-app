import React from "react";
import { Switch, Route } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  // const palette = generatePalette(seedColors[1]);
  const findPalette = id => seedColors.find(palette => palette.id === id);

  return (
    <div className="App">
      <Switch>
        {/* 
          Здесь будет Route на главную страницу
        <Route exact path="/" /> */}
        <Route
          exact
          path="/palette/:id"
          render={({match}) => (
            <Palette {...generatePalette(findPalette(match.params.id))} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
