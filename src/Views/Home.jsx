import React, { Component } from "react";
import {
  Hero,
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
import Catalogo from "../Catalogo_Productos";

import "./Animation.css"
import { CSSTransition, TransitionGroup} from 'react-transition-group';
const StyledHome = styled.div`
  .btn {
    width: 197px;
  }

  .hero_container {
    .children {
      img {
        width: 80%;
      }
    }
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
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    var sections = await [
      ...new Set(Catalogo.map((producto) => producto.family)),
    ].map((item) => ({
      section: item,
      cards: Catalogo.filter((producto) => producto.family === item),
    }));

    this.setState({
      HomeSections: sections,
    });
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
        return (
          <TransitionGroup className="carousel-anim">
            <CSSTransition
              key={data.section}
              timeout={500}
              classNames="caritem"
            >
            <Slider items={Arrays} body={renderCards} />
            </CSSTransition>
          </TransitionGroup>
        );
      }
    }
  }

  render() {
    return this.state.HomeSections ? (
      <StyledHome>
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
        </ResponsiveHeader>

        <Hero
          btnCoppy="Me interesa"
          imagen={"http://bancoppel.bahia360.mx/static/media/hero_corriente_responsive.21b4dd08.png"}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/contacto"
        />
        <Accordion items={this.state.HomeSections} body={this.body} />
        <Switcher
          items={this.state.HomeSections}
          body={this.bodySlider}
          noContainer
        />
        <ConoceCredito />
      </StyledHome>
    ) : null;
  }
}

export default Home;
