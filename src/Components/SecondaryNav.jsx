import React, { Component } from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  background: var(--white);
  padding: 16px 0;
  display: none;
  .secondaryNav {
    width: 100%;
    max-width: 400px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    h4 {
      color: var(--gray);
      cursor: pointer;
      font-size: 14px;
      margin-left: 8px;
      :first-child{
        margin-left: 0px;
      } //Espacio entre botones del secondary nav
      font-family: Futura;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    display: flex;
  }
`;

export default class SecondaryNav extends Component {
  render() {
    return (
      <StyledNav>
        <div className="secondaryNav">
        <a href="/empresas">
            <h4>Inicio</h4>
          </a>
          <h4>Soluciones</h4>
          <h4>Pymes</h4>
          <a href="/empresas/contacto">
            <h4>Contáctanos</h4>
          </a>
        </div>
      </StyledNav>
    );
  }
}
