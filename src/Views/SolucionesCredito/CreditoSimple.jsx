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
  TeInteresa,
} from "../../Components";
import Hero_ from "../../Assets/Heros/Hero_Credito_Simple.png";
import Hero_responsive from "../../Assets/Heros/Hero_Credito_Simple_Responsive.png";
import HeroHome from "../../Assets/Heros/Hero_Credito_Simple.svg";

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
            <Requisitos removeIndex={5} />
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
        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/"
        />{" "}
        <ProductHeader>
          <h1>
            CRÉDITO <span>SIMPLE</span>
          </h1>
        </ProductHeader>
        <Accordion items={CreditoSimpleSections} body={this.body} />
        <Switcher
          items={CreditoSimpleSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
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
      copy2: "El financiamiento que necesitas para pontencializar tu empresa.",
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
        copy: "Capital de trabajo, equipamiento o compra de Activo Fijo.",
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
