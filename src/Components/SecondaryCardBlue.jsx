import React, { Component } from "react";
import styled from "styled-components";

const StyledSecondaryCard = styled.div`
  background: #002a61;
  border-radius: 15px;
  padding: ${({ hasTitle }) => (hasTitle ? "16px" : "20px")};
  display: flex;
  align-items: center;

  height: 138px;
  width: 100%;

  img {
    height: 40px;
    width: 40px;
  }

  .body_secondary {
    margin-left: 18px;
    h2 {
      font-family: futura_heavy;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 110%;
      color: #81c1ea;
      margin-bottom: 9px;
    }
    p {
      font-family: futura_book;
      font-size: 14px;
      line-height: 120%;
      color: #f4f6f9;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 226px;
    height: 180px;

    img {
      height: 40px;
      width: 40px;
    }

    .body_secondary {
      margin-left: 0px;
      text-align: center;
      margin-top: 12px;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    width: 212px;
    height: 180px;
    margin: 10px;
    img {
      height: 39px;
      width: 36px;
    }

    .body_secondary {
      margin-left: 0px;
      text-align: center;
      margin-top: 14px;
    }
  }
`;

class SecondaryCardBlue extends Component {
  render() {
    return (
      <StyledSecondaryCard
        className="SecondaryCardBlue"
        hasTitle={this.props.card.title ? true : false}
      >
        {this.props.card.image ? (
          <img src={this.props.card.image} alt="" />
        ) : null}

        <div className="body_secondary">
          {this.props.card.title ? <h2>{this.props.card.title}</h2> : null}
          {this.props.card.copy ? <p>{this.props.card.copy}</p> : null}
        </div>
      </StyledSecondaryCard>
    );
  }
}

export default SecondaryCardBlue;
