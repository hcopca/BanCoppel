import React, { Component } from "react";
import {
  Hero,
  BancoppelBtn,
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
import Hero_ from "../../Assets/Heros/hero_puente.png";
import Hero_responsive from "../../Assets/Heros/hero_puente_responsive.png";
import HeroHome from "../../Assets/Heros/banner_puente.svg";
import styled from "styled-components";

const StyledCreditoPuente = styled.div`
  .btn {
    width: 197px;
  }
`;

class CreditoPuente extends Component {
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
      <StyledCreditoPuente>
        <ResponsiveHeader>
          <div className="title">
            <h1>
              Pensado <br /> para crear
            </h1>
            <h1>
              proyectos
              <br />
              habitacionales
            </h1>
          </div>
          <div className="copy">
            <h4>
              <span>Construimos</span> contigo.
            </h4>
          </div>
        </ResponsiveHeader>

        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/"
        />
        <ProductHeader>
          <h1>
            CRÉDITO <span>PUENTE</span>
          </h1>
        </ProductHeader>
        <Accordion items={CreditoPuenteSections} body={this.body} />
        <Switcher
          items={CreditoPuenteSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </StyledCreditoPuente>
    );
  }
}

export default CreditoPuente;

const CreditoPuenteSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_credito_puente.png").default,
      copy2:
        "El impulso que necesitas para comenzar a construir un México mejor.",
    },

    items: [
      {
        icon: require("../../Assets/stacked_blue_coins.svg").default,
        copy: "Disposiciones de capital conforme avance de obra.",
      },
      {
        icon: require("../../Assets/hand_coin_blue.svg").default,
        copy: "Paga capital hasta que inicia la comercialización.",
      },
      {
        icon: require("../../Assets/hands_exchanging_coin.svg").default,
        copy: "Sin penalización por pagos anticipados.",
      },
    ],
  },

  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Proyectos de edificación de vivienda.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función del valor de la edificación.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Hasta 12 meses de gracia de capital. Pagos mensuales de interés.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura. \n Por estructuración.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta cinco años.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
