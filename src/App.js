import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home/Home";
import SolucionesCredito from "./Views/SolucionesCredito/SolucionesCredito";
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
          <Route path="/soluciones">
            <SolucionesCredito />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
