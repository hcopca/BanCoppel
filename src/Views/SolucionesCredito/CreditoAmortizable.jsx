import React, { Component } from "react";
import {
  Hero,
  Accordion,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Switcher,
  ProductHeader,
  ResponsiveHeader,
  Requisitos,
  TeInteresa,
} from "../../Components";
import Hero_ from "../../Assets/Heros/hero_corriente.jpg";
import Hero_responsive from "../../Assets/Heros/hero_corriente_responsive.jpg";
import HeroHome from "../../Assets/Heros/banner_corriente.svg";

import Hero_mid from "../../Assets/Heros/img-cuenta-corriente-amortizable-mid.jpg";

import styled from "styled-components";

const StyledCreditoAmortizable = styled.div`
  .btn {
    width: 197px;
  }
`;
class CreditoAmortizable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  body(data, mobile) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return (
          <>
            <Requisitos type="solucionesCredito" />
            {mobile ? <TeInteresa /> : null}
          </>
        );
      default:
        <CardBullets data={data} />;
    }
  }
  isRequisitos(elem) {
    if (elem.section === "Requisitos") {
      this.setState({
        Requisitos: true,
      });
    } else {
      this.setState({
        Requisitos: false,
      });
    }
  }

  render() {
    return (
      <StyledCreditoAmortizable>
        <ResponsiveHeader>
          <div className="title">
            <h2>EL RESPALDO QUE</h2>
            <h2>
              LE HACÍA FALTA <br />A TU NEGOCIO
            </h2>
          </div>
          <div className="copy">
            <h4>
              Apoyamos las necesidades de <br /> tu capital de trabajo
            </h4>
          </div>
        </ResponsiveHeader>

        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/"
          midImg={Hero_mid}
        />

        <ProductHeader>
          <h2>
            CRÉDITO{" "}
            <span>
              CUENTA <br /> CORRIENTE
            </span>
          </h2>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body} />
        <Switcher
          items={CravSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </StyledCreditoAmortizable>
    );
  }
}

export default CreditoAmortizable;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_cuenta_amortizable.png").default,
      copy2:
        "Un crédito a corto plazo que te ayudará a cubrir las necesidades de tu capital de trabajo.",
    },

    items: [
      {
        icon: require("../../Assets/billetes_azul.svg").default,
        copy: "Optimización de flujo de capital de trabajo en corto plazo y largo plazo.",
      },
      {
        icon: require("../../Assets/hand_start.svg").default,
        copy: "Capital para apoyar el proceso productivo.",
      },
    ],
  },
  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Capital de trabajo de corto plazo y/o para cubrir eventualidades de tesorería.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función a la necesidad de capital de trabajo y la capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Pagos de intereses mensuales y capital al vencimiento de la disposición.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/porcentaje.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura y/o anualidad.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 36 meses.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
