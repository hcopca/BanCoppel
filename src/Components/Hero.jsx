import React, { Component } from "react";
import styled from "styled-components";
import Fondo_mujer from "../Assets/Fondo_mujer.png";
import Fondo_mujer_res from "../Assets/Fondo_mujer_responsive.png";
import Container from "./Container";
import BancoppelBtn from "./BancoppelBtn";

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
          img {
            max-width: 100%;
          }
          button {
            margin-top: 30px;
            margin-left: 37px;
          }
        }
      }
    }
  }
`;

class Hero extends Component {
  render() {
    return (
      <StyledHero>
        <img src={Fondo_mujer} alt="Fondo_mujer" className="Fondo_mujer" />
        <img
          src={Fondo_mujer_res}
          alt="Fondo_mujer"
          className="Fondo_mujer_res"
        />
        <div className="hero_container">
          <Container>
            <div className="children">
              <img src={this.props.banner} alt="banner" />
              <BancoppelBtn amarillo>{this.props.btnCoppy}</BancoppelBtn>
            </div>
          </Container>
        </div>
      </StyledHero>
    );
  }
}

export default Hero;
