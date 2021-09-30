import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Footer, Spin } from "./Components";

  const Home = React.lazy(()=>  import("./Views/Home"));
  const NominasBanCoppel = React.lazy(()=>  import("./Views/NominasBanCoppel"));
  const EmpresaNet = React.lazy(()=>  import("./Views/EmpresaNet"));
  const CuentaInversionEmpresarial = React.lazy(()=>  import("./Views/CuentaInversionEmpresarial"));
  const FormularioContacto = React.lazy(()=>  import("./Views/FormularioContacto"));

  // Soluciones credito
  const Crav = React.lazy(()=>  import("./Views/SolucionesCredito/Crav"));
  const CreditoSimple = React.lazy(()=>  import("./Views/SolucionesCredito/CreditoSimple"));
  const CreditoPuente = React.lazy(()=>  import("./Views/SolucionesCredito/CreditoPuente"));
  const ArrendamientoFinanciero = React.lazy(()=>  import("./Views/SolucionesCredito/ArrendamientoFinanciero"));

  const SolucionesIntegrales = React.lazy(()=>  import("./Views/SolucionesIntegrales/Factoraje"));
  const MonetizacionActivos = React.lazy(()=>  import("./Views/SolucionesIntegrales/MonetizacionActivos"));
  const FinanciamientoOrdenesCompra = React.lazy(()=>  import("./Views/SolucionesIntegrales/FinanciamientoOrdenesCompra"));
  const ProyectosInversion = React.lazy(()=>  import("./Views/SolucionesIntegrales/ProyectosInversion"));

const CreditoAmortizable = React.lazy(() => import('./Views/SolucionesCredito/CreditoAmortizable'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spin/>}>
      <div className="bancoppel">
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
          <Route path="/cuenta_inversion_empresarial">
            <CuentaInversionEmpresarial />
          </Route>
          <Route path="/factoraje">
            <SolucionesIntegrales />
          </Route>
          <Route path="/monetizacion_activos">
            <MonetizacionActivos />
          </Route>
          <Route path="/financiamiento_ordenes_compra">
            <FinanciamientoOrdenesCompra />
          </Route>
          <Route path="/proyectos_inversion">
            <ProyectosInversion />
          </Route>
          <Route path="/contacto">
            <FormularioContacto />
          </Route>
        </Switch>
        <Footer />
      </div>
      </Suspense>
    );
  }
}

export default App;
