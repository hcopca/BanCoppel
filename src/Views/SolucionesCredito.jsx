import React, { Component } from "react";
import {
  Container,
  Hero,
  BancoppelBtn,
  Accordion,
  CardBlue,
  Slider,
  ProductHeader,
  ListaProductos
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

const StyledCards = styled.div`
  padding: 10px 0;
  display: flex;
  overflow-x: scroll;
  .CardBlue {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;
const StyledCardsSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  .CardBlue {
    width: 100% !important;
    max-width: 100% !important;
    .body {
      h1 {
        font-size: 26px;
      }
    }
  }

  @media (min-width: 1200px) {
    .CardBlue {
      .body {
        h1 {
          font-size: 36px;
        }
      }
    }
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

class SolucionesCredito extends Component {
  body(data) {
    return (
      <StyledCards>
        {data.cards ? (
          data.cards.map((card, idx) => {
            return <CardBlue card={card} key={idx} />;
          })
        ) : (
          <p>no hay "cards" para mostrar</p>
        )}
      </StyledCards>
    );
  }
  bodySlider(data) {
    return (
      <StyledCardsSlider>
        {data.cards ? (
          data.cards.map((card, idx) => {
            return <CardBlue card={card} key={idx} row />;
          })
        ) : (
          <p>no hay "cards" para mostrar</p>
        )}
      </StyledCardsSlider>
    );
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
        <Accordion items={HomeSections} body={this.body} />
        <Slider items={HomeSections} body={this.bodySlider} />

        <ListaProductos items={Productos}/>
      </>
    );
  }
}

export default SolucionesCredito;

const HomeSections = [
  {
    section: "Beneficios",
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
  {
    section: "Características",
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