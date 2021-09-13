import React, { Component } from "react";
import BancoppelBtn from "./BancoppelBtn";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  height: ${(props) => (props.row ? "224px" : "321px")};
  width: ${(props) => (props.row ? "472px" : "212px")};
  max-width: 100%;

  background: var(--night-blue);
  border-radius: 25px;

  img {
    height: ${(props) => (props.row ? "100%" : "50%")};
    width: ${(props) => (props.row ? "175px" : "212px")};

    object-fit: cover;
    border-radius: 25px;
  }

  .card_body {
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

      font-family: futura_heavy;
      font-weight: bold;
      font-size: 15px;
      margin-bottom: 10px;
    }
    p {
      font-family: futura_light;
      color: var(--white);
      font-size: 12px;
    }
    button {
      margin-top: 10px;
      border: 0;
    }
  }

  @media (min-width: 576px) {
    height: ${(props) => (props.row ? "224px" : "381px")};
    .card_body {
      h1 {
        font-size: 17px;
      }
      p {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 992px) {
    height: ${(props) => (props.row ? "224px" : "522px")};
    width: ${(props) => (props.row ? "472px" : "306px")};

    br {
      display: none;
    }

    img {
      height: ${(props) => (props.row ? "100%" : "50%")};
      max-width: ${(props) => (props.row ? "200px" : "306px")};
      flex: ${(props) => (props.row ? "" : "1")};
      max-height: ${(props) => (props.row ? "" : "69%")};
    }

    .card_body {
      justify-content: space-between;
      align-items: flex-start;
      padding: 15px;
      width: ${(props) => (props.row ? "261px" : "100%")};
      h1 {
        font-size: ${(props) => (props.row ? "20px" : "24px")};
        text-align: left;
      }
      p {
        text-align: left;
        font-size: 15px;
      }
    }
  }

  @media (min-width: 1200px) {
    .card_body {
      h1 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
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
        <div className="card_body">
          <div className="copy">
            <h1>
              {this.props.card.titleWhite} <br />
              <span>{this.props.card.titleBlue} </span>
            </h1>

            {this.props.card.copy ? <p>{this.props.card.copy}</p> : null}
          </div>

          {this.props.card.button ? (
            <BancoppelBtn>{this.props.card.button}</BancoppelBtn>
          ) : null}
        </div>
      </Card>
    );
  }
}

export default CardBlue;
