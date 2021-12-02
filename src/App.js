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
// import Crav from "./Views/SolucionesCredito/Crav";
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
    throw new Error ("PRUEBA ERROR");
    return (
      <div className="bancoppel">
        <Navbar />
        <Switch>
          <Route exact path="/empresas">
            <Home />
          </Route>
          {/* <Route path="/crav">
            <Crav />
          </Route> */}
          <Route path="/empresas/credito-simple">
            <CreditoSimple />
          </Route>
          <Route path="/empresas/credito-amortizable">
            <CreditoAmortizable />
          </Route>
          <Route path="/empresas/credito-puente">
            <CreditoPuente />
          </Route>
          <Route path="/empresas/arrendamiento-financiero">
            <ArrendamientoFinanciero />
          </Route>
          <Route path="/empresas/nomina-bancoppel">
            <NominasBanCoppel />
          </Route>
          <Route path="/empresas/empresanet">
            <EmpresaNet />
          </Route>
          <Route path="/empresas/cuenta-inversion-empresarial">
            <CuentaInversionEmpresarial />
          </Route>
          <Route path="/empresas/factoraje-financiero">
            <SolucionesIntegrales />
          </Route>
          <Route path="/empresas/monetizacion-de-activos">
            <MonetizacionActivos />
          </Route>
          <Route path="/empresas/financiamiento-ordenes-de-compra">
            <FinanciamientoOrdenesCompra />
          </Route>
          <Route path="/empresas/proyectos-de-inversion">
            <ProyectosInversion />
          </Route>
          <Route path="/empresas/contacto">
            <FormularioContacto />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
