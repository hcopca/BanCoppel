import React, { Component } from "react";
import BancoppelBtn from "./BancoppelBtn";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  height: 321px;
  width: 212px;
  background: var(--night-blue);
  border-radius: 25px;
  br {
    display: none;
  }
  img {
    height: 50%;
    width: 212px;
    object-fit: cover;
    border-radius: 25px;
  }

  .body {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    h1 {
      color: var(--white);
      span {
        color: var(--morning-blue);
      }
      font-size: 20px;
      line-height: 110%;
    }
    p {
      color: var(--white);
      font-size: 12px;
    }
    button {
      border: 0;
    }
  }

  @media (min-width: 768px) {
    height: 522px;
    width: 306px;

    br {
      display: block;
    }

    img {
      width: 306px;
    }

    .body {
      justify-content: space-evenly;
      h1 {
        font-size: 36px;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

class CardBlue extends Component {
  render() {
    return (
      <Card row={this.props.row} className="CardBlue">
        {this.props.card.image ? (
          <img src={this.props.card.image} alt="img" />
        ) : null}
        <div className="body">
          {this.props.card.titleWhite && this.props.card.titleBlue ? (
            <h1>
              {this.props.card.titleWhite} <br />
              <span>{this.props.card.titleBlue} </span>
            </h1>
          ) : null}
          {this.props.card.copy ? <p>{this.props.card.copy}</p> : null}
          {this.props.card.button ? (
            <BancoppelBtn>{this.props.card.button}</BancoppelBtn>
          ) : null}
        </div>
      </Card>
    );
  }
}

export default CardBlue;
