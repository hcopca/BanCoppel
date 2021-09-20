import React, { Component } from "react";

import ListBullets from "./ListBullets";

const data = {
  section: "Requisitos",
  bullets: [
    "Solicitud de crédito.",
    "Autorización para consultar historial crediticio.",
    "Estados Financieros: Dictaminados, internos y proyectados.",
    "Información legal del acreditado o del proyecto.",
    "Contacto con ejecutivo.",
    "Identificación de o los Representante(s) Legal(es) o Autorizados que firmarán la cuenta.",
    "Firma de solicitud y contrato",
  ],
};

class Requisitos extends Component {
  componentDidMount() {
    const { removeIndex, push } = this.props;

    if (removeIndex) {
      data.bullets.splice(removeIndex);
    }
    if (push) {
      data.bullets.push(push);
    }
  }
  render() {
    return <ListBullets bullets={data.bullets} />;
  }
}

export default Requisitos;
