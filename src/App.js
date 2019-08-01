import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./utils/seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  state = {
    palettes: JSON.parse(window.localStorage.getItem("palettes")) || seedColors
  };

  findPalette = id => this.state.palettes.find(palette => palette.id === id);

  updateLocalStorage = () => {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  };

  savePalette = newPalette => {
    const updatedPalettes = [...this.state.palettes, newPalette];
    this.setState(
      {
        palettes: updatedPalettes
      },
      this.updateLocalStorage
    );
  };

  deletePalette = id => {
    this.setState(
      {
        palettes: this.state.palettes.filter(palette => palette.id !== id)
      },
      this.updateLocalStorage
    );
  };

  render() {
    const { palettes } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/palette/new"
            render={routeProps => (
              <NewPaletteForm
                {...routeProps}
                savePalette={this.savePalette}
                palettes={palettes}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList
                palettes={palettes}
                {...routeProps}
                deletePalette={this.deletePalette}
              />
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
