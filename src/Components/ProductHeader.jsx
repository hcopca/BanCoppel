import React, { Component } from "react";
import styled from "styled-components";

const StyledHead = styled.div`
  background: var(--light-blue);
  padding-top: 25px;

  display: flex;
  .header_body {
    margin: auto;
    flex: 1.5;
    text-align: center;
    color: var(--night-blue);

    h1 {
      font-size: 24px;
      text-transform: uppercase;
      font-family: futura_heavy; //Era bold
      span {
        color: var(--sky-blue);
      }
    }
  }
  .item {
    flex: 2;
    display: none;
    align-items: center;

    .line {
      height: 3px;
      flex: 1;
      background: var(--night-blue);
    }
    .circle {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 3px solid var(--night-blue);
    }
  }

  @media (min-width: 992px) {
    padding-top: 44px;
    .item {
      display: flex;
    }
  }
  

  @media (min-width: 1200px) {
    .header_body {
      flex: 2;
      h1 {
        width: 500px;
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
  @media (min-width: 1400px) {
    padding-top: 82px;
  }
`;

class ProductHeader extends Component {
  render() {
    return (
      <StyledHead>
        <div className="item">
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="header_body">{this.props.children}</div>
        <div className="item">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
      </StyledHead>
    );
  }
}

export default ProductHeader;
