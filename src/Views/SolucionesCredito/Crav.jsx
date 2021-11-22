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
import Hero_ from "../../Assets/Heros/hero_crav.jpg";
import Hero_responsive from "../../Assets/Heros/hero_crav_responsive.jpg";
import HeroHome from "../../Assets/Heros/crav_banner.svg";
import Hero_mid from "../../Assets/Heros/img-cuenta-corriente-crav-mid.jpg";

import styled from "styled-components";
const StyledCrav = styled.div`
  .btn {
    width: 197px;
  }
`;

class Crav extends Component {
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
      <>
      <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>
          Crédito cuenta corriente CRAV: detalles y requisitos | BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Crédito cuenta corriente CRAV: detalles y requisitos | BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/credito-cuenta-corriente-crav" />
          <meta 
          name="keywords"
          content="credito cuenta corriente, banca empresarial, bancoppel, capacidad de pago, financiamiento, credito, requisitos," />

      </Helmet>
      <StyledCrav>
        <ResponsiveHeader>
          <div className="title">
            <h2>UN CRÉDITO</h2>
            <h2>
              DE ACUERDO A<br />
              TUS NECESIDADES
            </h2>
          </div>
          <div className="copy">
            <h4>
              Ajustamos el crédito a tu <br /> <span>capacidad de pago.</span>
            </h4>
          </div>
        </ResponsiveHeader>

        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          midImg={Hero_mid}
          banner={HeroHome}
          path="/"
        />
        <ProductHeader>
          <h2>
            CRÉDITO{" "}
            <span>
              CUENTA <br />
              CORRIENTE CRAV
            </span>
          </h2>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body.bind(this)} />
        <Switcher
          items={CravSections}
          body={this.body.bind(this)}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </StyledCrav>
      </>
    );
  }
}

export default Crav;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_corriente_crav.png").default,
      copy2:
        "Un crédito que ajusta los pagos de capital del financiamiento a tu ciclo operativo.",
    },

    items: [
      {
        icon: require("../../Assets/billetes_azul.svg").default,
        copy: "Optimización de capital de trabajo a largo plazo.",
      },
      {
        icon: require("../../Assets/moneda_azul.svg").default,
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
        copy: "En función a las necesidades del capital de trabajo a corto y largo plazo, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "AMORTIZACIÓN",
        copy: "24 meses de resolvencia de capital y pago de interés mensual, 12 meses de amortización lineal.",
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
        copy: "36 meses.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
