import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./utils/seedColors";
import { generatePalette } from "./colorHelpers";

import "./App.css";

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
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                classNames="fade"
                timeout={500}
                key={location.key}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/palette/new"
                    render={routeProps => (
                      <div className="page">
                        <NewPaletteForm
                          {...routeProps}
                          savePalette={this.savePalette}
                          palettes={palettes}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/"
                    render={routeProps => (
                      <div class="page">
                        <PaletteList
                          palettes={palettes}
                          {...routeProps}
                          deletePalette={this.deletePalette}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={({ match }) => (
                      <div class="page">
                        <Palette
                          palette={generatePalette(
                            this.findPalette(match.params.id)
                          )}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteID/:colorID"
                    render={({ match }) => (
                      <div class="page">
                        <SingleColorPalette
                          palette={generatePalette(
                            this.findPalette(match.params.paletteID)
                          )}
                          colorID={match.params.colorID}
                        />
                      </div>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
