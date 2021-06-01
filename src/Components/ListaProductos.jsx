import React, { Component } from "react";
import styled from "styled-components";
import CardBlue from "./CardBlue";
import Container from "./Container";
import Slider from "./Slider";

const StyledPructs = styled.div`
  background: var(--white) !important;
  padding: 25px 0;

  @media (min-width: 992px) {
    padding: 0;
  }
  .bancoppel_slider,
  .bancoppel__slider {
    background: var(--white) !important;
  }
  .container {
    .rec {
      text-align: center;
      color: var(--storm-blue);
      font-family: Futura;
      font-size: 24px;
      @media (min-width: 992px) {
        display: none;
      }
    }
  }
`;

const StyledCards = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  justify-content: center;
  .CardBlue {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

const StyledCardsResponsive = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  margin-top: 25px;
  background: var(--white) !important;
  .CardBlue {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

class ListaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

  render() {
    return (
      <StyledPructs>
        {/* {this.bodySlider(this.props.items)} */}
        <Container>
          <h1 className="rec">Recomendaciones</h1>
          <StyledCardsResponsive>
            {Productos ? (
              Productos.map((bloque, idx) => {
                return bloque.cards.map((item, indx) => {
                  return <CardBlue card={item} key={indx} />;
                });
              })
            ) : (
              <p>no hay "cards" para mostrar</p>
            )}
          </StyledCardsResponsive>
        </Container>
        <Slider items={Productos} body={this.bodySlider} showHeader={false} />
      </StyledPructs>
    );
  }
}
export default ListaProductos;

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
  },
];
