import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import NominasBanCoppel from "./Views/NominasBanCoppel";
import { Navbar, Footer } from "./Components";

// Soluciones credito
import Crav from "./Views/SolucionesCredito/Crav";
import CreditoSimple from "./Views/SolucionesCredito/CreditoSimple";

class App extends Component {
  render() {
    return (
      <div className="bancoppel">
        <div style={{ background: "red" }}>
          <Link to="/" style={{ marginRight: 10 }}>
            Home
          </Link>
          <Link to="/crav" style={{ marginRight: 10 }}>
            crav
          </Link>
          <Link to="/credito_simple" style={{ marginRight: 10 }}>
            CreditoSimple
          </Link>
          <Link to="/nomina_bancoppel" style={{ marginRight: 10 }}>
            NominasBancoppel
          </Link>
        </div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/crav">
            <Crav />
          </Route>
          <Route path="/credito_simple">
            <CreditoSimple />
          </Route>
          <Route path="/nomina_bancoppel">
            <NominasBanCoppel />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
