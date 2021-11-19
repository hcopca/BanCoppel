import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Footer } from "./Components";

import Home from "./Views/Home";
import NominasBanCoppel from "./Views/NominasBanCoppel";
import EmpresaNet from "./Views/EmpresaNet";
import CuentaInversionEmpresarial from "./Views/CuentaInversionEmpresarial";
import FormularioContacto from "./Views/FormularioContacto";

// Soluciones credito
import Crav from "./Views/SolucionesCredito/Crav";
import CreditoSimple from "./Views/SolucionesCredito/CreditoSimple";
import CreditoPuente from "./Views/SolucionesCredito/CreditoPuente";
import ArrendamientoFinanciero from "./Views/SolucionesCredito/ArrendamientoFinanciero";

import SolucionesIntegrales from "./Views/SolucionesIntegrales/Factoraje";
import MonetizacionActivos from "./Views/SolucionesIntegrales/MonetizacionActivos";
import FinanciamientoOrdenesCompra from "./Views/SolucionesIntegrales/FinanciamientoOrdenesCompra";
import ProyectosInversion from "./Views/SolucionesIntegrales/ProyectosInversion";

import CreditoAmortizable from "./Views/SolucionesCredito/CreditoAmortizable";

class App extends Component {
  render() {
    return (
      <div className="bancoppel">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/crav">
            <Crav />
          </Route> */}
          <Route path="/credito-simple">
            <CreditoSimple />
          </Route>
          <Route path="/credito-amortizable">
            <CreditoAmortizable />
          </Route>
          <Route path="/credito-puente">
            <CreditoPuente />
          </Route>
          <Route path="/arrendamiento-financiero">
            <ArrendamientoFinanciero />
          </Route>
          <Route path="/nomina-bancoppel">
            <NominasBanCoppel />
          </Route>
          <Route path="/empresa-net">
            <EmpresaNet />
          </Route>
          <Route path="/cuenta-inversion-empresarial">
            <CuentaInversionEmpresarial />
          </Route>
          <Route path="/factoraje-financiero">
            <SolucionesIntegrales />
          </Route>
          <Route path="/monetizacion-activos">
            <MonetizacionActivos />
          </Route>
          <Route path="/financiamiento-ordenes-compra">
            <FinanciamientoOrdenesCompra />
          </Route>
          <Route path="/proyectos-inversion">
            <ProyectosInversion />
          </Route>
          <Route path="/contacto">
            <FormularioContacto />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
