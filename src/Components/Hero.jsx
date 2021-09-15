import React, { Component } from "react";
import styled from "styled-components";
import Container from "./Container";
import BancoppelBtn from "./BancoppelBtn";
import { Link } from "react-router-dom";
import Fondo_mujer from "../Assets/Heros/hero_home.png";
import Fondo_mujer_res from "../Assets/Heros/hero_home_responsive.png";
import bannerDeafult from "../Assets/Heros/Hero_Home_Text.svg";

const StyledHero = styled.div`
  display: flex;
  height: 60vh;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
  .Fondo_mujer {
    display: none;
  }

  .hero_container {
    display: none;
  }

  @media (min-width: 768px) {
    .Fondo_mujer_res {
      display: none;
    }
    .Fondo_mujer {
      display: block;
    }
  }

  @media (min-width: 992px) {
    height: 70vh;
    img {
      width: 100vw;
    }
    .hero_container {
      display: block;
      position: absolute;
      width: 100vw;
      top: 0;
      bottom: 0;

      .container {
        height: 100%;
        display: flex;
        align-items: center;
        .children {
          width: 60%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          img {
            max-width: 100%;
          }
          button {
            margin-left: 30px;
            align-self: flex-start;
            margin-top: 70px;
            font-family: Futura;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            width: 200px;
          }
        }
      }
    }
  }
`;

class Hero extends Component {
  render() {
    const { banner, btnCoppy, imagen, path, responsiveImg } = this.props;
    return (
      <StyledHero>
        <img
          src={imagen ? imagen : Fondo_mujer}
          alt="Fondo_mujer"
          className="Fondo_mujer"
        />
        <img
          src={responsiveImg ? responsiveImg : Fondo_mujer_res}
          alt="Fondo_mujer"
          className="Fondo_mujer_res"
        />
        <div className="hero_container">
          <Container>
            <div className="children">
              <img src={banner ? banner : bannerDeafult} alt="banner" />
              {/* <a href={path ? path : "/"}> */}
              <a href={"/contacto"}>
                <BancoppelBtn amarillo>
                  {btnCoppy ? btnCoppy : "no copy"}
                </BancoppelBtn>
              </a>
            </div>
          </Container>
        </div>
      </StyledHero>
    );
  }
}

export default Hero;
