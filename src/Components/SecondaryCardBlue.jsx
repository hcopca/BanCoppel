import React, { Component } from "react";
import styled from "styled-components";

const StyledSecondaryCard = styled.div`
  padding: 15px;
  background: var(--night-blue);
  border-radius: 16px;
  display: flex;
  align-items: center;

  width: 100%;

  height: 138px;

  .img {
    width: 40%;
    display: flex;
    justify-content: center;
  }
  .body_secondary {
    width: 100%;
    margin-left: 10px;
    h2 {
      font-size: 18px;
      color: var(--morning-blue);
      text-align: left;
      margin-bottom: 5px;
      font-family: Futura;
      font-style: normal;
      font-weight: bold;
    }
    p {
      color: var(--white);
      text-align: left;
      font-family: futura_light;

      font-size: 12px;
      line-height: 115%;
      color: var(--light-blue);
      @media (min-width: 992px) {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    width: 226px;
    height: 246px;

    .img {
      width: 100%;
      margin: 5px 0;
      img {
        max-width: 100%;
      }
    }

    .body_secondary {
      width: 100%;
      margin-top: 10px;
      margin-left: 0px;
      h2 {
        text-align: center;
      }
      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }

  @media (min-width: 992px) {
    .img {
      width: 80px;
      height: 80px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
`;

class SecondaryCardBlue extends Component {
  render() {
    return (
      <StyledSecondaryCard className="SecondaryCardBlue">
        <div className="img">
          {this.props.card.image ? (
            <img src={this.props.card.image} alt="" />
          ) : null}
        </div>

        <div className="body_secondary">
          {this.props.card.title ? <h2>{this.props.card.title}</h2> : null}
          {this.props.card.copy ? <p>{this.props.card.copy}</p> : null}
        </div>
      </StyledSecondaryCard>
    );
  }
}

export default SecondaryCardBlue;
