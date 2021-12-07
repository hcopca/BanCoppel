import React, { Component } from "react";
import BancoppelBtn from "./BancoppelBtn";
import styled from "styled-components";

const Card = styled.div`
  background: #002a61;
  min-width: 262px;
  max-width: 262px;
  height: 500px;
  border-radius: 10px;
  position: relative;
  img {
    border-radius: 10px;
    width: 100%;
    height: 255px;
    object-fit: cover;
  }

  .card_body {
    display: flex;
    flex-direction: column;
   
    align-items: center;
    justify-content: space-between;
    height: calc(100% - 262px);

    .copy {
      padding: 25px 15px 0 25px;  //mobile
      display: flex;
      align-items: left;
      flex-direction: column;
      h2 {
        font-family: futura_heavy;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        text-align: center;
        color: #ffffff;
        span {
          color: #81c1ea;
        }
      }
      p {
        margin: 0;
        margin-top: 7px;
        font-family: futura_book;
        font-size: 16px;
        line-height: 115%;
        text-align: center;
        color: #ffffff;
      }
    }
    a {
      padding: 0;
      button {
        border: 0;
        width: 152px;
        height: 50px;
        margin: 0;
        margin-bottom: 20px;
        margin-left: 10px;
      }
      button:hover {
        background-color: #ffbe12;
        color: #002a61;
      }
    }
  }

  @media (min-width: 992px) {
    min-width: 230px;
    max-width: 230px;
    width: 100%;
    height: 362px;
    img {
      height: 160px;
    }

    .card_body {
      height: calc(100% - 140px);
      align-items: flex-start;
      margin-left: 25px;
      display: flex;
      .copy {
       /* margin-bottom: -25px; */ //ajustar el botón con el bottom
        h2 {
          margin-top: 20px; //TOP tiulo
          font-size: 18px;
          text-align: left;
        }
        p {
          width: 105%;
          font-size: 14px;
          margin-top: 9px;
          padding-right: 25px;
          text-align: left;
        }
      }
      button {
        margin-left: 6px !important; //Alineación del botón
        margin-bottom: 00px !important;
      }
    }
  }

  /* SECONDARY */
  width: ${({ secondary }) => (secondary ? "362px" : null)} !important;
  max-width: ${({ secondary }) => (secondary ? "362px" : null)} !important;
  height: ${({ secondary }) => (secondary ? "330px" : null)} !important;
  min-height: ${({ secondary }) => (secondary ? "215px" : null)} !important ;
  img {
    height: ${({ secondary }) => (secondary ? "215px" : null)} !important;
  }
  .card_body {
    padding: ${({ secondary }) => (secondary ? "10px" : null)};
    height: ${({ secondary }) => (secondary ? "115px" : null)} !important;

    .copy {
      padding: ${({ secondary }) => (secondary ? "10px" : null)};
      h2 {
        display: ${({ secondary }) => (secondary ? "none" : null)};
      }
      p {
        display: ${({ secondary }) => (secondary ? "none" : null)};
      }
      h3 {
        font-family: futura_heavy;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
      }
    }
  }

  /* ROW */
  .card_body {
    padding: ${({ row }) => (row ? "25px 0 0 25 !important" : null)};
    width: ${({ row }) => (row ? "472px" : null)};
    height: ${({ row }) => (row ? "224px" : null)};
    align-items: ${({ row }) => (row ? "flex-start" : null)};

    .copy {
      h2 {
        font-size: ${({ row }) => (row ? "18px" : null)};
        text-align: left;
      }
      p {
        font-size: ${({ row }) => (row ? "14px" : null)};
        text-align: left;
      }
    }
  }

  @media (min-width: 992px) {
    display: ${({ row }) => (row ? "flex" : null)};

    max-width: ${({ row }) => (row ? "423px" : null)};//Ya no se mueve CARDS 4x4
    height: ${({ row }) => (row ? "190px" : null)};

    img {
      height: ${({ row }) => (row ? "190px" : null)};
      max-width: ${({ row }) => (row ? "180px" : null)};
    }

    a {
      margin-bottom: ${({ row }) => (row ? "55px" : null)};
    }
  }

  @media (min-width: 1200px) {
    min-width: 220px;
    width: 220px;

    .card_body {
      .copy {
        
        h2 {
          font-size: 18px;
          line-height: 100%;
          max-width: 212px; //TEXTO FINANCIAMIENTO ORDENES COMPRA MÁS PEQUEÑO
        }
        p {
          margin-right: 0px;
          font-size: 14px;
          line-height: 16px;
        }
      }
      button{
        width: 156px !important;
        height: 50px !important;
        margin-left: 90px;
      }
    }
  }

  @media (min-width: 1400px) {

    max-width: ${({ row }) => (row ? "472px" : null)};//Ya no se mueve CARDS 4x4
    height: ${({ row }) => (row ? "224px" : null)};

    img {
      height: ${({ row }) => (row ? "224px" : null)};
      max-width: ${({ row }) => (row ? "200px" : null)};
    }

    a {
      margin-bottom: ${({ row }) => (row ? "40px" : null)};
    }
    .card_body {
      .copy {
        
        h2 {
          font-size: 24px;
        }
        p {
          font-size: 16px;
        }
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
            <h2>{card.title_custom}</h2>
            {card.homeCopy ? <p>{card.homeCopy}</p> : null}
            {card.copy2 ? <h3>{card.copy2}</h3> : null}
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
