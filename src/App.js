import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import Crav from "./Views/Crav";
import Factoraje from "./Views/Factoraje";
import { Navbar, Footer } from "./Components";

class App extends Component {
  render() {
    return (
      <div className="bancoppel">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/crav">
            <Crav />
          </Route>
          <Route path="/factoraje">
            <Factoraje />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
