import React, { Component } from "react";
import styled from "styled-components";

const StyledSecondaryCard = styled.div`
  padding: 20px;
  background: var(--night-blue);
  border-radius: 16px;
  display: flex;
  align-items: center;
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
  }
  .body_secondary {
    padding: 10px 20px;
    width: 75%;
    h2 {
      font-size: 18px;
      color: var(--morning-blue);
      margin-bottom: 10px;
      text-align: left;
    }
    p {
      color: var(--white);
      text-align: left;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    .img {
      width: 100%;

      img {
        max-width: 100%;
      }
    }

    .body_secondary {
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
    console.log(this.props);
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
