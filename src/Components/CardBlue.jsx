import React, { Component } from "react";
import BancoppelBtn from "./BancoppelBtn";
import styled from "styled-components";

const Card = styled.div`
  background: #002a61;
  min-width: 252px;
  max-width: 252px;
  height: 351px;
  border-radius: 20px;
  position: relative;
  img {
    border-radius: 20px;
    width: 100%;
    height: 139px;
    object-fit: cover;
  }

  .card_body {
    display: flex;
    flex-direction: column;
    padding: 12px;
    align-items: center;
    justify-content: space-between;
    height: calc(100% - 145px);

    .copy {
      h1 {
        font-family: Futura;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        color: #ffffff;
        span {
          color: #81c1ea;
        }
      }
      p {
        margin: 0;
        margin-top: 7px;
        font-family: futura_light;
        font-size: 14px;
        line-height: 115%;
        text-align: center;
        color: #ffffff;
      }
      h2 {
      }
    }
    a {
      padding: 0;
      button {
        border: 0;
        width: 150px;
        height: 45px;
        margin: 0;
      }
      button:hover {
        background-color: #ffbe12;
        color: #002a61;
      }
    }
  }

  @media (min-width: 992px) {
    min-width: 315px;
    height: 555px;
    img {
      height: 310px;
    }

    .card_body {
      padding: 20px;
      height: calc(100% - 310px);
      align-items: flex-start;

      .copy {
        h1 {
          font-size: 22px;
          text-align: left;
        }
        p {
          font-size: 16px;
          margin-top: 15px;
          text-align: left;
        }
      }
      a {
        margin-top: 15px;
      }
    }
  }

  /* SECONDARY */
  width: ${({ secondary }) => (secondary ? "449px" : null)} !important;
  max-width: ${({ secondary }) => (secondary ? "449px" : null)} !important;
  height: ${({ secondary }) => (secondary ? "auto" : null)} !important;
  img {
    height: ${({ secondary }) => (secondary ? "330px" : null)} !important;
  }
  .card_body {
    padding: ${({ secondary }) => (secondary ? "20px" : null)};
    height: ${({ secondary }) => (secondary ? "auto" : null)} !important;

    .copy {
      padding: ${({ secondary }) => (secondary ? "10px" : null)};
      h1 {
        display: ${({ secondary }) => (secondary ? "none" : null)};
      }
      p {
        display: ${({ secondary }) => (secondary ? "none" : null)};
      }
      h2 {
        font-family: futura_heavy;
        font-size: 21px;
        line-height: 125%;
        color: #ffffff;
      }
    }
  }

  /* ROW */
  @media (min-width: 992px) {
    display: ${({ row }) => (row ? "flex" : null)};
    min-width: ${({ row }) => (row ? "472px" : null)};
    max-width: ${({ row }) => (row ? "472px" : null)};
    height: ${({ row }) => (row ? "224px" : null)};

    img {
      height: ${({ row }) => (row ? "224px" : null)};
      max-width: ${({ row }) => (row ? "200px" : null)};
    }
  }

  .card_body {
    padding: ${({ row }) => (row ? "20px" : null)};
    width: ${({ row }) => (row ? "calc(100% - 200px)" : null)};
    height: ${({ row }) => (row ? "100%" : null)};
    align-items: ${({ row }) => (row ? "flex-start" : null)};

    .copy {
      h1 {
        font-size: ${({ row }) => (row ? "19px" : null)};
      }
      p {
        font-size: ${({ row }) => (row ? "15px" : null)};
      }
    }
  }
`;

class CardBlue extends Component {
  render() {
    const { card, ...rest } = this.props;

    return (
      <Card className="CardBlue" {...rest}>
        {card.image ? <img src={card.image} alt="img" /> : null}
        <div className="card_body">
          <div className="copy">
            <h1>{card.title_custom}</h1>
            {card.homeCopy ? <p>{card.homeCopy}</p> : null}
            {card.copy2 ? <h2>{card.copy2}</h2> : null}
          </div>

          {card.path ? (
            <a href={card.path}>
              <BancoppelBtn>
                {rest.row ? "Me interesa" : "Ver más"}
              </BancoppelBtn>
            </a>
          ) : null}
        </div>
      </Card>
    );
  }
}

export default CardBlue;
