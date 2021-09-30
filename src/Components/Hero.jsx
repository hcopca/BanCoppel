import React, { Component } from "react";
import styled from "styled-components";

import { Container, BancoppelBtn, Spin } from "./index";
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
          width: 70%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          img {
            max-width: 90%;
          }
          button {
            margin-left: 30px;
            align-self: flex-start;
            margin-top: 21px;
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
  constructor(props) {
    super(props);
    this.state = {
      hero: true,
      copy: true,
    };
  }

  render() {
    const { banner, btnCoppy, imagen, responsiveImg } = this.props;
    return (
      <>
        <StyledHero className="fade-in-fast hero__">
          <img
            src={imagen ? imagen : Fondo_mujer}
            alt="Fondo_mujer"
            className="Fondo_mujer"
            onLoad={(e) => this.setState({ hero: false })}
          />
          <img
            src={responsiveImg ? responsiveImg : Fondo_mujer_res}
            alt="Fondo_mujer"
            className="Fondo_mujer_res"
          />
          <div className="hero_container">
            <Container>
              <div className="children">
                <img
                  src={banner ? banner : bannerDeafult}
                  alt="banner"
                  onLoad={(e) => this.setState({ copy: false })}
                />
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
        {(this.state.hero || this.state.copy) && <Spin />}
      </>
    );
  }
}

export default Hero;
