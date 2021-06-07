import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Navbar, Footer } from "./Components";

import Home from "./Views/Home";
import NominasBanCoppel from "./Views/NominasBanCoppel";
import EmpresaNet from "./Views/EmpresaNet";

// Soluciones credito
import Crav from "./Views/SolucionesCredito/Crav";
import CreditoSimple from "./Views/SolucionesCredito/CreditoSimple";
import CreditoAmortizable from "./Views/SolucionesCredito/CreditoAmortizable";
import CreditoPuente from "./Views/SolucionesCredito/CreditoPuente";
import ArrendamientoFinanciero from "./Views/SolucionesCredito/ArrendamientoFinanciero";

import SolucionesIntegrales from "./Views/SolucionesIntegrales/Factoraje";


class App extends Component {
  render() {
    return (
      <div className="bancoppel">
        <div style={{ background: "orange", display: "flex", flexWrap: "wrap" }}> 
        <Link to="/soluciones_integrales" style={{ marginRight: 10 }}>
            soluciones integrales
          </Link>
        </div>
        <div style={{ background: "red", display: "flex", flexWrap: "wrap" }}>
          <Link to="/credito_simple" style={{ marginRight: 10 }}>
            CreditoSimple
          </Link>
          <Link to="/crav" style={{ marginRight: 10 }}>
            crav
          </Link>
          <Link to="/credito_amortizable" style={{ marginRight: 10 }}>
            credito_amortizable
          </Link>
          <Link to="/credito_puente" style={{ marginRight: 10 }}>
            credito_puente
          </Link>
          <Link to="/arrendamiento_financiero" style={{ marginRight: 10 }}>
            arrendamiento_financiero
          </Link>
        </div>
        <div style={{ background: "green", display: "flex", flexWrap: "wrap" }}>
          <Link to="/" style={{ marginRight: 10 }}>
            Home
          </Link>
          <Link to="/nomina_bancoppel" style={{ marginRight: 10 }}>
            NominasBancoppel
          </Link>
          <Link to="/empresa_net" style={{ marginRight: 10 }}>
            empresa_net
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
          <Route path="/credito_amortizable">
            <CreditoAmortizable />
          </Route>
          <Route path="/credito_puente">
            <CreditoPuente />
          </Route>
          <Route path="/arrendamiento_financiero">
            <ArrendamientoFinanciero />
          </Route>
          <Route path="/nomina_bancoppel">
            <NominasBanCoppel />
          </Route>
          <Route path="/empresa_net">
            <EmpresaNet />
          </Route>
          <Route path="/soluciones_integrales">
            <SolucionesIntegrales/>
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
