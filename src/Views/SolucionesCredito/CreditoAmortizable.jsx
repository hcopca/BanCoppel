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
import Hero_ from "../../Assets/Heros/hero_corriente.png";
import Hero_responsive from "../../Assets/Heros/hero_corriente_responsive.png";
import HeroHome from "../../Assets/Heros/banner_corriente.svg";
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
            <Requisitos />
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

        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/"
        />

        <ProductHeader>
          <h1>
            CRÉDITO{" "}
            <span>
              CUENTA <br /> CORRIENTE AMORTIZABLE
            </span>
          </h1>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body} />
        <Switcher items={CravSections} body={this.body} isRequisitos={this.isRequisitos.bind(this)} />
        {this.state.Requisitos ? <TeInteresa /> : null}
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
      image: require("../../Assets/mano_cuenta_amortizable.png").default,
      copy2: "Un crédito a corto plazo que te ayudará a cubrir las necesidades de tu capital de trabajo.",
    },

    items: [
      {
        icon: require("../../Assets/billetes_azul.svg").default,
        copy: "Optimización de flujo de capital de trabajo en corto plazo.",
      },
      {
        icon: require("../../Assets/hand_start.svg").default,
        copy: "Capital para apoyar el proceso productivo.",
      },
      // {
      //   icon: require("../../Assets/network_blue.svg").default,
      //   copy: "Disposiciones ágiles al amparo de la línea.",
      // },
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
        title: "AMORTIZACIÓN",
        copy: "Amortización 36 meses con amortizaciones máximas a 12 meses",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
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
