import React, { Component } from "react";
import styled from "styled-components";
import Container from "./Container";

import PymesMobile from "../Assets/pymes_last_mobile.png";
import Pymes from "../Assets/pymes.png";
import BancoppelBtn from "./BancoppelBtn";

const StyledBanner = styled.section`
  .imgNormal {
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .imgResponsivo {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }

  .img-holder {
    position: relative;
    display: inline-block;
    margin: 50px 00px;
    @media (max-width: 768px) {
      margin: 50px -15px;
    }
  }
  .img-holder {
    img {
      max-width: 100%;
      object-fit: contain;
    }
  }
  .img-holder .contenido_sobrepuesto {
    position: absolute;
    top: 85%;
    left: 65px;
    right: 0;
    transform: translate(0, -50%);
    text-align: center;
    color: #fff;

    img {
      display: none;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      width: 100%;
      left: auto;
      justify-content: center;
      top: auto;
      bottom: 17%;
    }
  }

  .img-holder .login-in-banner {
    position: absolute;
    top: 10px;
    width: 100%;
  }

  .mainTitle {
    font-style: italic;
    font-weight: 900;
    font-size: 3rem !important;
  }

  .subTitle {
    font-weight: 500;
    font-size: 1.5rem !important;
    margin: -12px 0;
  }

  @media (min-width: 400px) {
    .mainTitle {
      font-size: 4rem !important;
    }

    .subTitle {
      font-size: 2.3rem !important;
    }
  }

  @media (min-width: 576px) {
    .img-holder .contenido_sobrepuesto {
      img {
        display: inline-block;
      }
    }

    @media (min-width: 650px) {
      .mainTitle {
        font-size: 5rem !important;
      }

      .subTitle {
        font-size: 2.8rem !important;
      }
    }
  }
`;

export default class ConoceCredito extends Component {
  render() {
    return (
      <Container>
        <StyledBanner>
          <div className="img-holder">
            <img
              className="imgNormal"
              src={Pymes}
              alt=""
              draggable="false"
            ></img>

            <img
              className="imgResponsivo"
              src={PymesMobile}
              alt=""
              draggable="false"
            ></img>

            {/* <div className="login-in-banner">
          <div className="container">
            <div className="row">
              <div className="offset-lg-9 col-lg-2">
                <LoginPortable />
              </div>
            </div>
          </div>
        </div> */}
            <div className="contenido_sobrepuesto">
              <BancoppelBtn amarillo>Solicita tu crédito</BancoppelBtn>

              {/* <h1 className="mainTitle">COSECHÓMETRO</h1>
          <p className="subTitle">Es hora de sumar nuestros resultados</p>
          <p className="subTitle">
            y conocer el potencial de rendimiento DEKALB®
          </p> */}
            </div>
          </div>
        </StyledBanner>
      </Container>
    );
  }
}
