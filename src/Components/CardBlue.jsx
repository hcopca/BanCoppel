import React, { Component } from "react";
import BancoppelBtn from "./BancoppelBtn";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  height: ${(props) => (props.row ? "222px" : "321px")};
  width: ${(props) => (props.row ? "350px" : "212px")};
  max-width: 100%;

  background: var(--night-blue);
  border-radius: 25px;
  br {
    display: none;
  }
  img {
    height: ${(props) => (props.row ? "100%" : "50%")};
    width: ${(props) => (props.row ? "175px" : "212px")};

    object-fit: cover;
    border-radius: 25px;
  }

  .body {
    flex: 1;
    width: ${(props) => (props.row ? "175px" : "100%")};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) => (props.row ? "center" : "space-between")};
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
      margin: ${(props) => (props.row ? "15px 0" : "0")};
    }
    button {
      border: 0;
    }
  }

  @media (min-width: 992px) {
    height: ${(props) => (props.row ? "220px" : "522px")};
    width: ${(props) => (props.row ? "522px" : "306px")};

    br {
      display: block;
    }

    img {
      height: ${(props) => (props.row ? "100%" : "50%")};
      max-width: ${(props) => (props.row ? "261px" : "306px")};
    }

    .body {
      justify-content: space-evenly;
      width: ${(props) => (props.row ? "261px" : "100%")};
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
