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
      margin-bottom: 30px;
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
        max-width: 70%;
        text-align: left;
        font-size: 16px;
        font-family: futura_light;
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
          }
        }
      }
    }
    .bullets {
      flex: 1.1;
      padding-left: 36px;

      .bullet {
        width: 60%;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

class CardBullets extends Component {
  render() {
    console.log(this.props);
    return (
      <StyledBigCard>
        <div className="card">
          <CardBlue card={this.props.data.card} />
        </div>
        <div className="bullets">
          {this.props.data.items.map((item, idx) => {
            return (
              <div className="bullet" key={idx}>
                <img src={item.icon} alt="item.icon" />
                <p>{item.copy}</p>
              </div>
            );
          })}
        </div>
      </StyledBigCard>
    );
  }
}

export default CardBullets;
