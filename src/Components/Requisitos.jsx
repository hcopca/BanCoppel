import React, { Component } from "react";

import ListBullets from "./ListBullets";

class Requisitos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { type, push } = this.props;

    await this.makingBullets(type);

    if (push) {
      const { data, idx } = push;
      const bullets = this.state.bullets;
      bullets.splice(bullets.length - idx, 0, data);

      this.setState({
        bullets: bullets,
      });
    }
  }

  makingBullets(type) {
    switch (type) {
      case "solucionesCredito":
        this.setState({
          section: "Requisitos",
          bullets: [
            "Solicitud de crédito.",
            "Autorización para consultar historial crediticio.",
            "Estados Financieros: Dictaminados, internos y proyectados.",
            "Información legal del acreditado o del proyecto.",
            "Contacto con ejecutivo.",
            "Firma de solicitud y contrato",
          ],
        });
        break;
      default:
        this.setState({
          section: "Requisitos",
          bullets: [
            "Solicitud de crédito.",
            "Autorización para consultar historial crediticio.",
            "Estados Financieros: Dictaminados, internos y proyectados.",
            "Información legal del acreditado o del proyecto.",
            "Contacto con ejecutivo.",
            "Firma de solicitud y contrato",
          ],
        });
    }
  }
  render() {
    return this.state.bullets ? (
      <ListBullets bullets={this.state.bullets} />
    ) : null;
  }
}

export default Requisitos;
