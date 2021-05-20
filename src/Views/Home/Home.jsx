import React from "react";
import { Container, Hero, BancoppelBtn } from "../../Components";
import HeroHome from "../../Assets/Hero_Home.svg";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 20px 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .title {
    margin-bottom: 20px;
    h1 {
      text-transform: uppercase;
      color: var(--sky-blue);
      line-height: 35px;
      &:first-child {
        color: var(--night-blue);
      }
    }
  }
  .copy {
    margin-bottom: 20px;
    h4 {
      color: var(--night-blue);
      font-family: futura_normal;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledHomeHero = styled.div`
  img {
    max-width: 100%;
  }
  button {
    margin-top: 30px;
  }
`;

export default function Home() {
  return (
    <>
      <StyledHeader>
        <Container>
          <div className="title">
            <h1>Tu aliado</h1>
            <h1>en Banca</h1>
            <h1>Empresarial</h1>
          </div>
          <div className="copy">
            <h4>Brindamos soluciones a tu empresa</h4>
          </div>

          <BancoppelBtn amarillo>Solicita ya tu crédito</BancoppelBtn>
        </Container>
      </StyledHeader>
      <Hero>
        <StyledHomeHero>
          <img src={HeroHome} alt="" />
          <BancoppelBtn amarillo>Solicita ya tu crédito</BancoppelBtn>
        </StyledHomeHero>
      </Hero>
    </>
  );
}
