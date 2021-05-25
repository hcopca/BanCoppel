import React, { Component } from "react";
import styled from "styled-components";

const StyledHead = styled.div`
  display: none;
  background: var(--light-blue);
  padding-top: 50px;
  .header_body {
    flex: 2;
  }
  .item {
    flex: 3;
    display: flex;
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
    display: flex;
  }

  @media (min-width: 1400px) {
    .header_body {
      flex: 1.5;
    }
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
