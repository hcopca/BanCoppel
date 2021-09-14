import React from "react";

import Button from "./BancoppelBtn";
import Container from "./Container";
import styled from "styled-components";

const StyledTeInteresa = styled.div`
  padding: 30px 0;
  padding-bottom: 0;
  position: relative;
  .container {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
  }

  .header {
    margin: auto;
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;

    max-height: 400px;
    background-color: var(--night-blue);
    border-radius: 16px;
    display: flex;
    justify-content: center;

    flex-direction: column;

    h1 {
      margin-top: 25px;
      font-family: Futura;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 110%;
      color: white;
      text-align: center;
    }
    p {
      text-align: center;
      margin-top: 10px;
      font-family: Futura;
      font-size: 14px;
      line-height: 110%;
      color: white;
    }
    .boton {
      display: flex;
      justify-content: center;
      margin-top: 25px;
      margin-bottom: 20px;
    }
  }

  .back {
    display: none;
  }
  @media (min-width: 992px) {
    padding: 30px 0;

    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
    .back {
      display: block;
      position: absolute;
      z-index: 9;
      top: 0;
      width: 100%;
      height: 100%;
      .gray {
        background: var(--light-blue);

        height: 50%;
      }
      .white {
        background: white;
        height: 50%;
      }
    }

    .header {
      h1 {
        font-size: 36px;
      }
      p {
        font-size: 24px;
      }
    }
  }
`;
export default function TeInteresa() {
  return (
    <StyledTeInteresa>
      <div className="back">
        <div className="gray"></div>
        <div className="white"></div>
      </div>
      <Container>
        <div className="header">
          <h1>¿Te interesa?</h1>
          <p>Consúltalo directamente con un ejectivo</p>
          <div className="boton">
            <a href="/contacto">
              <Button amarillo>¡Déjanos tus datos!</Button>
            </a>
          </div>
        </div>
      </Container>
    </StyledTeInteresa>
  );
}
