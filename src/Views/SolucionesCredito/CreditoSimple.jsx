import React, { Component } from "react";
import {
  Hero,
  BancoppelBtn,
  Accordion,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Requisitos,
  Switcher,
  ProductHeader,
  ResponsiveHeader,
} from "../../Components";
import HeroHome from "../../Assets/Hero_Credito_Simple.svg";

class CreditoSimple extends Component {
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
            <h1>EL CAPITAL PARA</h1>
            <h1>
              IMPULSAR TU
              <br />
              NEGOCIO
            </h1>
          </div>
          <div className="copy">
            <h4>
              Financiamiento a largo plazo
              <br /> para darle vida a tus proyectos
            </h4>
          </div>
          <BancoppelBtn amarillo>Me interesa</BancoppelBtn>
        </ResponsiveHeader>

        <Hero btnCoppy="Me interesa" banner={HeroHome} />
        <ProductHeader>
          <h1>
            CRÉDITO <span>SIMPLE</span>
          </h1>
        </ProductHeader>
        <Accordion items={CreditoSimpleSections} body={this.body} />
        <Switcher items={CreditoSimpleSections} body={this.body} />
        <ListaProductos />
      </>
    );
  }
}

export default CreditoSimple;

const CreditoSimpleSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons2.png").default,
      copy: "El financiamiento que necesitas para pontencializar tu empresa.",
    },

    items: [
      {
        icon: require("../../Assets/billetes_azul.svg").default,
        copy: "Optimización de capital de trabajo a largo plazo.",
      },
      {
        icon: require("../../Assets/hand_start.svg").default,
        copy: "Capital para proyectos productivos.",
      },
      {
        icon: require("../../Assets/hand_money_blue.svg").default,
        copy: "Compra de activo fijo.",
      },
      {
        icon: require("../../Assets/circle_blue_money.svg").default,
        copy: "Compra de inventarios.",
      },
    ],
  },
  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Capital de trabajo, equipamiento o compra de activo fijo.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función al monto de la inversión en capital de trabajo y proyectos de largo plazo, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "AMORTIZACIÓN",
        copy: "Pagos periódicos de capital e intereses.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TAZA",
        copy: "Variable.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta siete años.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];