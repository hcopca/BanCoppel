import React, { Component } from "react";
import {
  Container,
  Hero,
  BancoppelBtn,
  Accordion,
  SecondaryCardBlue,
  Slider,
  ProductHeader,
  ListaProductos
  CardBullets,
} from "../Components";
import HeroHome from "../Assets/Hero_SolucionesCredito.svg";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 20px 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .title {
    margin-bottom: 20px;
    h1 {
      text-transform: uppercase;
      color: var(--sky-blue);
      line-height: 35px;
      &:first-child {
        color: var(--night-blue);
      }
    }
  }
  .copy {
    margin-bottom: 20px;
    h4 {
      color: var(--night-blue);
      font-family: futura_normal;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledPruductHeader = styled.div`
  .header_product {
    text-align: center;
    color: var(--night-blue);
    span {
      color: var(--sky-blue);
    }
  }
`;

const StyledSencdaryCards = styled.div`
  padding: 30px 0;
  margin: auto;

  .SecondaryCardBlue {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    .SecondaryCardBlue {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 992px) {
    height: 550px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }

  @media (min-width: 1200px) {
  }
`;

class SolucionesCredito extends Component {
  body(data) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return (
          <StyledSencdaryCards>
            {data.cards.map((card, idx) => {
              return <SecondaryCardBlue card={card} key={idx} />;
            })}
          </StyledSencdaryCards>
        );

      default:
        console.error("No hay solucion definida", data);
    }

    if (data.section === "Beneficios") {
    }
  }

  render() {
    return (
      <>
        <StyledHeader>
          <Container>
            <div className="title">
              <h1> UN CRÉDITO</h1>
              <h1>DE ACUERDO A</h1>
              <h1> TUS NECESIDADES</h1>
            </div>
            <div className="copy">
              <h4>
                Ajustamos el crédito a tu <br /> capacidad de pago
              </h4>
            </div>
            <BancoppelBtn amarillo>Haz clic ahora</BancoppelBtn>
          </Container>
        </StyledHeader>
        <Hero btnCoppy="Haz clic ahora" banner={HeroHome} />
        <ProductHeader>
          <StyledPruductHeader>
            <h1 className="header_product">
              CRÉDITO{" "}
              <span>
                CUENTA
                <br /> CORRIENTE CRAV
              </span>
            </h1>
          </StyledPruductHeader>
        </ProductHeader>
        <Accordion items={SolucionesCreditoSections} body={this.body} />
        <Slider items={SolucionesCreditoSections} body={this.body} />
      </>
    );
  }
}

export default SolucionesCredito;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../Assets/Persons2.png").default,
      copy: "Un crédito que ajusta los pagos de capital del financiamiento a tu ciclo operativo.",
    },

    items: [
      {
        icon: require("../Assets/billetes_azul.svg").default,
        copy: "Optimización de capital de trabajo a largo plazo.",
      },
      {
        icon: require("../Assets/moneda_azul.svg").default,
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
        image: require("../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función a las necesidades del capital de trabajo a corto, largo plazo, sujeto a capacidad de pago.",
        image: require("../Assets/hand_coins.svg").default,
      },
      {
        title: "AMORTIZACIÓN",
        copy: "Primeros 24 meses: pago de capital e intereses mensual. Últimos 12 meses: pagos periódicos de capital e intereses sin revolvencia.",
        image: require("../Assets/gear_coin.svg").default,
      },
      {
        title: "TAZA",
        copy: "Variable.",
        image: require("../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura y/o anualidad.",
        image: require("../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Vigencia de contrato a 36 meses con periodo de revolvencia de 24 meses.",
        image: require("../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
    cards: [
      {
        titleWhite: "Crédito",
        titleBlue: "Simple",
        copy: "El capital para impulsar tu negocio.",
        path: "/",
        image: require("../Assets/Persons2.png").default,
        button: "Ver más",
      },
      {
        titleWhite: "Crédito Cuenta",
        titleBlue: "Corriente CRAV",
        copy: "Un crédito diseñado de acuerdo a tus necesidades.",
        path: "/",
        image: require("../Assets/Persons1.png").default,
        button: "Ver más",
      },
      {
        titleWhite: "Arrendamiento",
        titleBlue: "Financiero",
        copy: "Financiamiento de activos fijos pensados para tu empresa.",
        path: "/",
        image: require("../Assets/IpadHands.png").default,
        button: "Ver más",
      },
      {
        titleWhite: "Crédito",
        titleBlue: "Puente",
        copy: "Pensado para crear proyectos habitacionales.",
        path: "/",
        image: require("../Assets/GirlHand.png").default,
        button: "Ver más",
      },
    ],
  },
];

const Productos = [
  {
    section: "Cuenta Eje",
    cards: [
      {
        titleWhite: "Crédito Cuenta",
        titleBlue: "Corriente CRAV",
        copy: "Un crédito diseñado de acuerdo a tus necesidades.",
        path: "/",
        image: require("../Assets/Persons2.png").default,
        button: "Ver más",
      },
      {
        titleWhite: "Crédito Cuenta",
        titleBlue: "Corriente Amortizable",
        copy: "El respaldo que le hacía falta a tu negocio.",
        path: "/",
        image: require("../Assets/Persons1.png").default,
        button: "Ver más",
      },
      {
        titleWhite: "Arrendamiento",
        titleBlue: "Financiero",
        copy: "Financiamiento de Activos fijos pensados para tu empresa.",
        path: "/",
        image: require("../Assets/IpadHands.png").default,
        button: "Ver más",
      },
      
    ],
  },
  {
    section: "Prueba",
    cards: [
      {
        titleWhite: "Crédito Cuenta",
        titleBlue: "Corriente CRAV",
        copy: "Un crédito diseñado de acuerdo a tus necesidades.",
        path: "/",
        image: require("../Assets/Persons2.png").default,
        button: "Ver más",
      },
      {
        titleWhite: "Crédito Cuenta",
        titleBlue: "Corriente Amortizable",
        copy: "El respaldo que le hacía falta a tu negocio.",
        path: "/",
        image: require("../Assets/Persons1.png").default,
        button: "Ver más",
      },
      {
        titleWhite: "Arrendamiento",
        titleBlue: "Financiero",
        copy: "Financiamiento de Activos fijos pensados para tu empresa.",
        path: "/",
        image: require("../Assets/IpadHands.png").default,
        button: "Ver más",
      },
      
    ],
  }
];