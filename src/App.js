import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Page from "./Page";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./utils/seedColors";
import { generatePalette } from "./colorHelpers";

import "./styles/Page.css";

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
                classNames="page"
                timeout={500}
                key={location.key}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/palette/new"
                    render={routeProps => (
                      <Page>
                        <NewPaletteForm
                          {...routeProps}
                          savePalette={this.savePalette}
                          palettes={palettes}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/"
                    render={routeProps => (
                      <Page>
                        <PaletteList
                          palettes={palettes}
                          {...routeProps}
                          deletePalette={this.deletePalette}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={({ match }) => (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(match.params.id)
                          )}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteID/:colorID"
                    render={({ match }) => (
                      <Page>
                        <SingleColorPalette
                          palette={generatePalette(
                            this.findPalette(match.params.paletteID)
                          )}
                          colorID={match.params.colorID}
                        />
                      </Page>
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
