import React, { Component } from "react";
import styled from "styled-components";
import Fondo_mujer from "../Assets/Fondo_mujer.png";
const StyledHero = styled.div`
  display: contents;
  img {
    max-width: 100%;
  }
`;

class Hero extends Component {
  render() {
    return (
      <StyledHero>
        <img src={Fondo_mujer} alt="Fondo_mujer" />
      </StyledHero>
    );
  }
}

export default Hero;
