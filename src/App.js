import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  state = {
    palettes: seedColors
  };

  findPalette = id => this.state.palettes.find(palette => palette.id === id);

  savePalette = newPalette => {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/palette/new"
            render={routeProps => (
              <NewPaletteForm {...routeProps} savePalette={this.savePalette} />
            )}
          />
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList palettes={this.state.palettes} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={({ match }) => (
              <Palette
                palette={generatePalette(this.findPalette(match.params.id))}
              />
            )}
          />
          <Route
            exact
            path="/palette/:paletteID/:colorID"
            render={({ match }) => (
              <SingleColorPalette
                palette={generatePalette(
                  this.findPalette(match.params.paletteID)
                )}
                colorID={match.params.colorID}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
