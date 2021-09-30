import React, { Component } from "react";
import styled from "styled-components";

const StyledSpin = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  .spring-spinner,
  .spring-spinner * {
    box-sizing: border-box;
  }

  .spring-spinner {
    height: 60px;
    width: 60px;
  }

  .spring-spinner .spring-spinner-part {
    overflow: hidden;
    height: calc(60px / 2);
    width: 60px;
  }

  .spring-spinner .spring-spinner-part.bottom {
    transform: rotate(180deg) scale(-1, 1);
  }

  .spring-spinner .spring-spinner-rotator {
    width: 60px;
    height: 60px;
    border: calc(60px / 7) solid transparent;
    border-right-color: #fcda47;
    border-top-color: #fcda47;
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation 1.5s ease-in-out infinite;
    transform: rotate(-200deg);
  }

  @keyframes spring-spinner-animation {
    0% {
      border-width: calc(60px / 7);
    }
    25% {
      border-width: calc(60px / 23.33);
    }
    50% {
      transform: rotate(115deg);
      border-width: calc(60px / 7);
    }
    75% {
      border-width: calc(60px / 23.33);
    }
    100% {
      border-width: calc(60px / 7);
    }
  }
`;

export default class Spin extends Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
  }

  componentWillUnmount() {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
  }

  render() {
    return (
      <StyledSpin>
        <div class="spring-spinner">
          <div class="spring-spinner-part top">
            <div class="spring-spinner-rotator"></div>
          </div>
          <div class="spring-spinner-part bottom">
            <div class="spring-spinner-rotator"></div>
          </div>
        </div>
      </StyledSpin>
    );
  }
}
