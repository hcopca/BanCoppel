import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
import Hero_ from "../Assets/Heros/hero_home.jpg";
import Hero_mid from "../Assets/Heros/hero_home_mid.jpg";
import Hero_responsive from "../Assets/Heros/hero_home_responsive.jpg";
import HeroHome from "../Assets/Heros/line1.svg";
import Catalogo from "../Catalogo_Productos";

import "./Animation.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const StyledHome = styled.div`
  .btn {
    width: 197px;
  }
  @media (min-width: 992px) {
    .hero_container {
      .container {
        .children {
         .subchildren{
           h1{
            font-size: 36px;
            width: 362px;
            height: 80px;
           }
           .padresubtitle{
            .subtitle{
              display: flex;
              justify-content: center;
              align-items: center;
               width: 362px;
               height: 62px;
            }
           }
         }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .hero_container {
      .container {
        .children {
         .subchildren{
           h1{
           height: 80px;
           width: 400px;
            font-size: 34px;
           }
           img{
            margin-top: -170px;
             width: 22px;
             margin-left: 2px;
           }
         }
        }
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
      .card_body {
        .copy {
          padding: 0px 0px 10px 10px;
        }
      }
    }
    @media (min-width: 1200px) {
      .CardBlue {
        width: 100%;
        min-width: 423px;
        .card_body {
          .copy {
            padding: 5px 10px;
          }
        }
      }
    }
  }
`;
const titleBanner = "LA BANCA QUE TU EMPRESA NECESITA"
const subtitle = (
  <p>Brindamos{" "}<span> soluciones</span> a tu<span> empresa</span></p>
);
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
      <>
      <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>
          Banca empresarial BanCoppel | BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Banca empresarial BanCoppel | BanCoppel.com" />
          <link rel="canonical" href="http://bancoppel.mx/empresas" />
          <meta 
          name="keywords"
          content="banca empresarial, bancoppel, banco, empresa, negocio,  cuenta de inversion, cuenta de nomina, credito" />

      </Helmet>
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
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          midImg={Hero_mid}
          banner={HeroHome}
          path="/empresas/contacto"
          titleBanner={titleBanner}
          subtitle={subtitle}
        />
        <Accordion items={this.state.HomeSections} body={this.body} />
        <Switcher
          items={this.state.HomeSections}
          body={this.bodySlider}
          noContainer
        />
        <ConoceCredito />
      </StyledHome>
      </>
    ) : null;
  }
}

export default Home;
