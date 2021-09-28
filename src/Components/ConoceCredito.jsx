import React, { Component } from "react";
import styled from "styled-components";
import Container from "./Container";

import PymesMobile from "../Assets/pymes_last_mobile.png";
import Pymes from "../Assets/pymes.png";
import BancoppelBtn from "./BancoppelBtn";

const StyledBanner = styled.section``;

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

            <div className="contenido_sobrepuesto">
              <a href="/contacto">
                <BancoppelBtn amarillo>Solicita tu crédito</BancoppelBtn>
              </a>
            </div>
          </div>
        </StyledBanner>
      </Container>
    );
  }
}
