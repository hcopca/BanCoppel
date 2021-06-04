import React, { Component } from "react";
import styled from "styled-components";

const StyledSecondaryCard = styled.div`
  padding: 15px;
  background: var(--night-blue);
  border-radius: 16px;
  display: flex;
  align-items: center;
  height: 150px;

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
      font-family: lato_light;
      font-size: 14px;
      line-height: 16px;

      @media (min-width: 992px) {
        font-size: 13px;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    height: 246px;
    width: 226px;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
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
      h2 {
        text-align: center;
      }
      p {
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
    // console.log(this.props);
    return (
      <StyledSecondaryCard className="SecondaryCardBlue">
        <div className="img">
          <img src={this.props.card.image} alt="" />
        </div>

        <div className="body_secondary">
          <h2>{this.props.card.title}</h2>
          <p>{this.props.card.copy}</p>
        </div>
      </StyledSecondaryCard>
    );
  }
}

export default SecondaryCardBlue;
