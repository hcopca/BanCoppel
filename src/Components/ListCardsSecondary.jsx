import React from "react";
import styled from "styled-components";
import Card from "./SecondaryCardBlue";

const StyledSencdaryCards = styled.div`
  height: 100%;

  margin: auto;

  .SecondaryCardBlue {
    margin-bottom: 17px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    width: 492px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    .SecondaryCardBlue {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 992px) {
    width: 738px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`;

export default function ListCardsSecondary(props) {
  return (
    <StyledSencdaryCards>
      {props.cards.map((card, idx) => (
        <Card key={idx} card={card} />
      ))}
    </StyledSencdaryCards>
  );
}
