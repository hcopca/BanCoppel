import React, { Component } from "react";
import styled from "styled-components";
import CardBlue from "./CardBlue";

const StyledBigCard = styled.div`
  .card {
    display: none;
  }
  .bullets {
    .bullet {
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      &:last-child {
        margin-bottom: 0;
      }
      &:first-child {
        padding-top: 0;
      }
      img {
        margin-right: 20px;
      }
      p {
        max-width: 100%;
        text-align: left;
        font-size: 16px;
        font-family: futura_light;
        line-height: 18px;
        display: flex;

        span {
          font-family: Futura;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 120%;
        }
      }
    }
  }

  @media (min-width: 992px) {
    display: flex;
    .card {
      display: block;
      flex: 1;
      .CardBlue {
        min-width: 100%;
        img {
          height: 75%;
          width: 100% !important;
          max-width: 1000px;
        }
        .card_body {
          justify-content: center;
          p {
            font-size: 21px;

            span {
              font-size: 21px;
            }
          }
        }
      }
    }
    .bullets {
      flex: 1.2;
      padding-left: 36px;

      .bullet {
        width: 60%;
        img {
          min-width: 40px;
          min-height: 40px;
        }
      }
    }

    .row-grap {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      align-content: flex-start;
      .bullet {
        width: auto;
        flex: 1 0 40%;
        margin-bottom: 28px;
        margin-right: 30px;

        &:nth-child(even) {
          margin-right: 0;
        }
      }
    }

    .row-grap-flex {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      align-content: flex-start;
      .bullet {
        width: auto;
        flex: 1 0 45%;

        margin-right: 5px;

        &:last-child {
          p {
            max-width: 100%;
          }
        }
      }
    }
  }
`;

class CardBullets extends Component {
  ClassNameByArrLen(arr) {
    if (arr.length <= 3) {
      return "column";
    } else if (arr.length === 4) {
      return "row-grap";
    } else {
      return "row-grap-flex";
    }
  }
  render() {
    return (
      <StyledBigCard>
        <div className="card">
          <CardBlue card={this.props.data.card} secondary />
        </div>
        <div
          className={`bullets ${this.ClassNameByArrLen(this.props.data.items)}`}
        >
          {this.props.data.items.map((item, idx) => {
            return (
              <div className="bullet" key={idx}>
                <img src={item.icon} alt="item.icon" />
                <p>
                  {item.bullet ? <span>{item.bullet} </span> : ""}
                  {item.copy}
                </p>
              </div>
            );
          })}
        </div>
      </StyledBigCard>
    );
  }
}

export default CardBullets;
