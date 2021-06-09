import React, { Component } from "react";
import {
  Hero,
  BancoppelBtn,
  ConoceCredito,
  Accordion,
  CardBlue,
  ResponsiveHeader,
  Switcher,
  Slider,
} from "../Components";
import HeroHome from "../Assets/Hero_Home.svg";
import styled from "styled-components";

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
  grid-template-columns: repeat(
    ${(props) => (props.length === 1 ? 1 : 2)},
    1fr
  );
  grid-gap: 23px;

  .item_card {
    display: flex;

    justify-content: flex-start;
    margin: auto;
    &:nth-child(even) {
      justify-content: flex-end;
    }

    .CardBlue {
      width: 100%;

      @media (min-width: 1200px) {
        width: 472px;
      }
    }
  }
`;

class Home extends Component {
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
    const { cards } = data;
    if (cards) {
      function arrayByGroups(data) {
        var arr = [];
        for (var i = 0; i < data.length; i += 4) {
          arr.push(data.slice(i, i + 4));
        }
        return arr;
      }
      var Arrays = arrayByGroups(cards);
      function renderCards(cards) {
        return (
          <StyledCardsSlider length={cards.length}>
            {cards ? (
              cards.map((card, idx) => {
                return (
                  <div className="item_card" key={idx}>
                    <CardBlue card={card} row />
                  </div>
                );
              })
            ) : (
              <p>no hay "cards" para mostrar</p>
            )}
          </StyledCardsSlider>
        );
      }
      if (Arrays) {
        return <Slider items={Arrays} body={renderCards} />;
      }
    }
  }

  render() {
    return (
      <>
        <ResponsiveHeader>
          <div className="title">
            <h1>Tu aliado</h1>
            <h1>
              en Banca
              <br />
              Empresarial
            </h1>
          </div>
          <div className="copy">
            <h4>Brindamos soluciones a tu empresa</h4>
          </div>
          <BancoppelBtn amarillo>Solicita ya tu crédito</BancoppelBtn>
        </ResponsiveHeader>

        <Hero btnCoppy="Solicita ya tu crédito" banner={HeroHome} />
        <Accordion items={HomeSections} body={this.body} />
        <Switcher items={HomeSections} body={this.bodySlider} noContainer />
        <ConoceCredito />
      </>
    );
  }
}

export default Home;

const HomeSections = [
  {
    section: "Cuenta Eje",
    cards: [
      {
        titleWhite: "Cuenta",
        titleBlue: "Inversión Empresarial",

        copy: "La nueva forma de administrar de manera eficiente los recursos de tu empresa.",
        path: "/",
        image: require("../Assets/Persons2.png").default,
        button: "Me interesa",
      },
    ],
  },
  {
    section: "Nómina",
    cards: [
      {
        titleWhite: "Nómina",
        titleBlue: "Bancoppel",

        copy: "Servicio que brinda la facilidad de transferir de forma masiva o individual el dinero...",
        path: "/",
        image: require("../Assets/Persons2.png").default,
        button: "Me interesa",
      },
    ],
  },
  {
    section: "Soluciones de crédito",
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
    section: "Soluciones integrales",
    cards: [
      {
        titleWhite: "Factoraje",
        copy: "El capital para impulsar tu negocio.",
        path: "/",
        image: require("../Assets/Persons2.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Monetización",
        titleBlue: "de Activos",
        copy: "Un crédito diseñado de acuerdo a tus necesidades.",
        path: "/",
        image: require("../Assets/Persons1.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Financiamiento de",
        titleBlue: "órdenes de compra",

        copy: "Financiamiento de activos fijos pensados para tu empresa.",
        path: "/",
        image: require("../Assets/IpadHands.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Proyectos",
        titleBlue: "de inversión",
        copy: "Financiamiento de activos fijos pensados para tu empresa.",
        path: "/",
        image: require("../Assets/GirlHand.png").default,
        button: "Me interesa",
      },
    ],
  },
  {
    section: "EmpresaNET",
    cards: [
      {
        titleWhite: "Crédito",
        titleBlue: "Simple",
        copy: "El capital para impulsar tu negocio.",
        path: "/",
        image: require("../Assets/Persons2.png").default,
        button: "Ver más",
      },
    ],
  },
];
