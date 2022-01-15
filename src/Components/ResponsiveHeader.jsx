import React from "react";
import styled from "styled-components";
import Container from "./Container";
import BancoppelBtn from "./BancoppelBtn";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  padding: 20px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    button {
      width: 197px;
      height: 47px;
    }
  }
  .title {
    margin-bottom: 20px;
    h2 {
      font-family: futura_heavy;
      text-transform: uppercase;

      color: var(--sky-blue);

      font-size: 32px;
      line-height: 32px;

      &:first-child {
        color: var(--night-blue);
      }
    }
  }
  .copy {
    margin-bottom: 20px;
    h4 {
      color: var(--night-blue);
      font-family: Futura;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }
    span {
      font-family: Futura-bold;
    }
  }

  a {
    button {
      width: 197px;
      height: 46.89px;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function ResponsiveHeader(props) {
  return (
    <StyledHeader>
      <Container>
        {props.children}
        <Link to="/contacto">
          <BancoppelBtn amarillo>Me interesa</BancoppelBtn>
        </Link>
      </Container>
    </StyledHeader>
  );
}
