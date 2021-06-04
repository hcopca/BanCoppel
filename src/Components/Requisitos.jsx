import React, { Component } from "react";
import ListBullets from "./ListBullets";
const data = {
  section: "Requisitos",
  bullets: [
    "Solicitud de crédito.",
    "Autorización para consulta historial crediticio.",
    "Estados Financieros: Dictaminados, internos y proyectados.",
    "Información legal del acreditado o del proyecto.",
    "Contacto con ejecutivo.",
  ],
};

class Requisitos extends Component {
  render() {
    return <ListBullets bullets={data.bullets} />;
  }
}

export default Requisitos;
