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
} from "../../Components";
import HeroHome from "../../Assets/Hero_credito_puente.svg";

class CreditoPuente extends Component {
  body(data) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return <Requisitos />;
      default:
        <CardBullets data={data} />;
    }
  }

  render() {
    return (
      <>
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
            <h4>Juntos construimos México</h4>
          </div>
          <BancoppelBtn amarillo>Contáctanos</BancoppelBtn>
        </ResponsiveHeader>

        <Hero btnCoppy="Contáctanos" banner={HeroHome} />
        <ProductHeader>
          <h1>
            CRÉDITO <span>PUENTE</span>
          </h1>
        </ProductHeader>
        <Accordion items={CreditoPuenteSections} body={this.body} />
        <Switcher items={CreditoPuenteSections} body={this.body} />
        <ListaProductos />
      </>
    );
  }
}

export default CreditoPuente;

const CreditoPuenteSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons2.png").default,
      copy: "El impulso que necesitas para comenzar a contruir un México mejor.",
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
        title: "TAZA",
        copy: "Variable.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura. Por estructuración.",
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
