import React, { Component } from "react";
import {
  Hero,
  Accordion,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Requisitos,
  Switcher,
  ProductHeader,
  ResponsiveHeader,
  TeInteresa,
} from "../../Components";
import Hero_ from "../../Assets/Heros/Hero_Credito_Simple.jpg";
import Hero_responsive from "../../Assets/Heros/hero_responsive_credito_simple.jpg";
import Hero_mid from "../../Assets/Heros/Hero_Credito_Simple_mid.jpg";
import HeroHome from "../../Assets/Heros/Hero_Credito_Simple.svg";
import styled from "styled-components";
const StyledCreditoSimple = styled.div`
  .btn {
    width: 197px;
  }
`;
class CreditoSimple extends Component {
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
      <StyledCreditoSimple>
        <ResponsiveHeader>
          <div className="title">
            <h2>EL FINANCIAMIENTO PARA</h2>
            <h2>
              IMPULSAR TU
              <br />
              NEGOCIO
            </h2>
          </div>
          <div className="copy">
            <h4>
              Financiamiento a <span>largo plazo</span>
              <br /> para darle vida a tus proyectos
            </h4>
          </div>
        </ResponsiveHeader>
        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          midImg={Hero_mid}
          path="/"
        />{" "}
        <ProductHeader>
          <h2>
            CRÉDITO <span>SIMPLE</span>
          </h2>
        </ProductHeader>
        <Accordion items={CreditoSimpleSections} body={this.body} />
        <Switcher
          items={CreditoSimpleSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </StyledCreditoSimple>
    );
  }
}

export default CreditoSimple;

const CreditoSimpleSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons2.png").default,
      copy2: "Financiamiento para impulsar tu negocio.",
    },

    items: [
      {
        icon: require("../../Assets/billetes_azul.svg").default,
        copy: "Optimización de recursos a largo plazo.",
      },
      {
        icon: require("../../Assets/hand_start.svg").default,
        copy: "Recursos para proyectos productivos.",
      },
      {
        icon: require("../../Assets/hand_money_blue.svg").default,
        copy: "Compra de Activo Fijo.",
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
        copy: "Equipamiento o compra de Activo Fijo.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función al monto de la inversión en activo fijo y proyectos de largo plazo, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "AMORTIZACIÓN",
        copy: "Amortizaciones periódicas de capital e intereses.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/porcentaje.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura y/o estructuración.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 10 años.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
