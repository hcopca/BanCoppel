import React, { Component } from "react";
import styled from "styled-components";
import Container from "./Container";

import PymesMobile from "../Assets/pymes_last_mobile.png";
import Pymes from "../Assets/pymes.png";
import BancoppelBtn from "./BancoppelBtn";

const StyledBanner = styled.section`
  .container {
    padding-top: 25px;
    padding-bottom: 25px;
    position: relative;
  }
  .imgNormal {
    display: none;
  }

  .img-holder {
    img {
      max-width: 100%;
    }
  }

  .contenido_sobrepuesto {
    position: absolute;
    width: calc(100% - 30px);
    height: calc(100% - 50px);
    top: 25px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    a {
      margin-bottom: 27px;
      button {
        width: 180px;
        height: 60px;
      }
    }
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
    .container {
      padding-top: 44px;
      padding-bottom: 50px;
    }
    .imgNormal {
      display: block;
    }

    .imgResponsivo {
      display: none;
    }
    .img-holder {
      display: flex;
      justify-content: center;
    img {
      max-width: 70%;
    }
  }

    .contenido_sobrepuesto {
      width: calc(100% - 30px);
      height: calc(100% - 100px);
      top: 50px;
      justify-content: flex-start;
      a {
        margin-bottom: 10px;
        margin-left: 130px;
        button {
        width: 140px;
        height: 30px;
      }
      }
    }
  }

  @media (min-width: 992px) {
    .contenido_sobrepuesto {
      a {
        margin-bottom: 27px;
        margin-left: 185px;
        button {
        p{
          padding: 2px;
        }
        width: 140px;
        height: 40px;
      }
      }
    }
  }

  @media (min-width: 1200px) {
    .container {
      padding-top: 44px;
      padding-bottom: 44px;
    }
  }
  @media (min-width: 1366px) {

    .img-holder {
      img {
        max-width: 100%;
          }
       }
    .contenido_sobrepuesto {
      a {
        margin-bottom: 15px;
        margin-left: 207px;
        button {
        width: 163px;
        height: 50px;
      }
      }
    }
    @media (min-width: 1400px) {
    .container {
      padding-top: 63px;
      padding-bottom: 63px;
    }
   }
  }
`;

export default class ConoceCredito extends Component {
  render() {
    return (
      <StyledBanner>
        <Container>
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
          </div>

          <div className="contenido_sobrepuesto">
            <a href="/empresas/contacto">
              <BancoppelBtn amarillo><p>Solicita tu crédito</p></BancoppelBtn>
            </a>
          </div>
        </Container>
      </StyledBanner>
    );
  }
}
