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
import HeroHome from "../../Assets/Hero_amortizable.svg";

class CreditoAmortizable extends Component {
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
            <h1>EL RESPALDO QUE</h1>
            <h1>
              LE HACÍA FALTA <br />A TU NEGOCIO
            </h1>
          </div>
          <div className="copy">
            <h4>
              Apoyamos las necesidades de <br /> tu capital de trabajo
            </h4>
          </div>
          <BancoppelBtn amarillo>Descubre más</BancoppelBtn>
        </ResponsiveHeader>

        <Hero btnCoppy="Descubre más" banner={HeroHome} />

        <ProductHeader>
          <h1>
            CRÉDITO{" "}
            <span>
              CUENTA <br /> CORRIENTE AMORTIZABLE
            </span>
          </h1>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body} />
        <Switcher items={CravSections} body={this.body} />
        <ListaProductos />
      </>
    );
  }
}

export default CreditoAmortizable;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons2.png").default,
      copy: "Un crédito a corto plazo que te ayudará a cubrir las necesidades de tu capital de trabajo.",
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
        icon: require("../../Assets/network_blue.svg").default,
        copy: "Disposiciones ágiles al amparo de la línea.",
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
        copy: "En función a las necesidades del capital de trabajo a corto, largo plazo, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "AMORTIZACIÓN",
        copy: "Pago de capital e intereses mensual.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TAZA",
        copy: "Variable.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura y/o anualidad.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Plazo indefinido.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
