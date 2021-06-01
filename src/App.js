import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import CreditoSimple from "./Views/CreditoSimple";
import Factoraje from "./Views/Factoraje";
import { Navbar, Footer } from "./Components";

class App extends Component {
  render() {
    return (
      <div className="bancoppel">
        <div style={{ background: "red" }}>
          <Link to="/" style={{ marginRight: 10 }}>
            Home
          </Link>
          <Link to="/creditoSimple" style={{ marginRight: 10 }}>
            creditoSimple
          </Link>
          <Link to="/factoraje" style={{ marginRight: 10 }}>
            factoraje
          </Link>
        </div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/creditoSimple">
            <CreditoSimple />
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
