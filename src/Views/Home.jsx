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

import styled from "styled-components";
import Hero_ from "../Assets/Heros/hero_home.png";
import Hero_responsive from "../Assets/Heros/hero_home_responsive.png";
import HeroHome from "../Assets/Heros/Hero_Home_Text.svg";

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
            <h1>La Banca que</h1>
            <h1>
              tu empresa <br /> necesita
            </h1>
          </div>
          <div className="copy">
            <h4>
              Brindamos <span>soluciones </span>
            </h4>
            <h4>
              a tu <span>empresa</span>
            </h4>
          </div>
          <a href="/contacto">
            <BancoppelBtn amarillo>Me interesa</BancoppelBtn>
          </a>
        </ResponsiveHeader>

        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/contacto"
        />
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
    section: "Cuenta Inversión",
    cards: [
      {
        titleWhite: "Cuenta",
        titleBlue: "Inversión Empresarial",

        copy: "La nueva forma de administrar de manera eficiente los recursos de tu empresa.",
        path: "/cuenta_inversion_empresarial",
        image: require("../Assets/mano_cuenta_empresarial.png").default,
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
        path: "/nomina_bancoppel",
        image: require("../Assets/mano_nomina.png").default,
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
        path: "/credito_simple",
        image: require("../Assets/Persons2.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Crédito Cuenta",
        titleBlue: "Corriente CRAV",
        copy: "Un crédito diseñado de acuerdo a tus necesidades.",
        path: "/crav",
        image: require("../Assets/Persons1.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Arrendamiento",
        titleBlue: "Financiero",
        copy: "Financiamiento de activos fijos pensados para tu empresa.",
        path: "/arrendamiento_financiero",
        image: require("../Assets/IpadHands.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Crédito",
        titleBlue: "Puente",
        copy: "Pensado para crear proyectos habitacionales.",
        path: "/credito_puente",
        image: require("../Assets/GirlHand.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Crédito Cuenta",
        titleBlue: "Corriente Amortizable",
        copy: "Apoyamos las necesidades de tu capital de trabajo",
        path: "/credito_puente",
        image: require("../Assets/mano_cuenta_amortizable.png").default,
        button: "Me interesa",
      },
    ],
  },
  {
    section: "Soluciones integrales",
    cards: [
      {
        titleWhite: "Factoraje",
        copy: "El capital para impulsar tu negocio.",
        path: "/soluciones_integrales",
        image: require("../Assets/Persons2.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Monetización",
        titleBlue: "de Activos",
        copy: "Un crédito diseñado de acuerdo a tus necesidades.",
        path: "/monetizacion_activos",
        image: require("../Assets/Persons1.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Financiamiento de",
        titleBlue: "órdenes de compra",

        copy: "Financiamiento de activos fijos pensados para tu empresa.",
        path: "/financiamiento_ordenes_compra",
        image: require("../Assets/IpadHands.png").default,
        button: "Me interesa",
      },
      {
        titleWhite: "Proyectos",
        titleBlue: "de inversión",
        copy: "Financiamiento de activos fijos pensados para tu empresa.",
        path: "/proyectos_inversion",
        image: require("../Assets/IpadHands.png").default,
        button: "Me interesa",
      },
    ],
  },
  {
    section: "EmpresaNET",
    cards: [
      {
        titleWhite: "Empresa",
        titleBlue: "NET",
        copy: "Servicio de Banca Electrónica, que permite controlar, administrar tus cuentas y realizar operaciones financieras de forma segura.",
        path: "/empresa_net",
        image: require("../Assets/Persons2.png").default,
        button: "Me interesa",
      },
    ],
  },
];
