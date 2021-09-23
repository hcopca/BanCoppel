import React from "react";
import styled from "styled-components";
import Card from "./SecondaryCardBlue";

const StyledSencdaryCards = styled.div`
  .item {
    margin: 10px auto;
  }

  @media (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .item {
      max-width: 50%;
      margin: 0;
      padding: 10px;
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 992px) {
    width: ${({ wid }) => wid}px;
    max-width: 100%;
    margin: auto;
    .item {
      padding: 20px;
      max-width: ${({ len }) => 100 / len}%;
      flex: 0;
    }
  }
`;

export default function ListCardsSecondary(props) {
  function getWidth(number) {
    return Math.ceil(number / 2);
  }
  function getWidthCont(number) {
    if (number >= 4) {
      return getWidth(number) * 256;
    }
  }

  return (
    <StyledSencdaryCards
      len={getWidth(props.cards.length)}
      wid={getWidthCont(props.cards.length)}
    >
      {props.cards.map((card, idx) => (
        <div className="item" item={idx} key={idx}>
          <Card key={idx} card={card} />
        </div>
      ))}
    </StyledSencdaryCards>
  );
}
