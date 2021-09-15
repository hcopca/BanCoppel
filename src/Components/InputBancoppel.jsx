import React, { Component } from "react";
import styled from "styled-components";
// import Mostrar from "../Assets/Mostrar.svg";

const StyledInput = styled.div`
  position: relative;
  label {
    position: absolute;
    font-family: futura_light;
    font-size: 12px;
    line-height: 130%;
    color: #636363;
    position: absolute;
    top: 7px;
    left: 12px;
    display: flex;
    align-items: center;
    color: #636363;
    pointer-events: none;
  }

  input {
    transition: all 0.3s ease-in-out;
    width: 100%;
    padding: 27px 12px 7px 12px;
    border: 1.5px solid #225aa7;
    border-radius: 10px;
    font-family: futura_normal;
    font-size: 14px;
    line-height: 141%;
    color: #282828;
    &::placeholder {
      font-family: futura_light;
      font-size: 14px;
      line-height: 115%;
      display: flex;
      align-items: center;
      color: #aaaaaa;
      opacity: 0.7;
    }
  }

  /* SECONDARY */

  label {
    font-size: ${({ secondary }) => (secondary ? "18px" : null)};
    line-height: ${({ secondary }) => (secondary ? "27px" : null)};
    top: ${({ secondary }) => (secondary ? "0" : null)};
    bottom: ${({ secondary }) => (secondary ? "0" : null)};
    right: ${({ secondary }) => (secondary ? "0" : null)};
    margin: ${({ secondary }) => (secondary ? "auto" : null)};

    top: ${({ hasText, secondary }) => (hasText && secondary ? "-20px" : null)};
    left: ${({ hasText, secondary }) => (hasText && secondary ? "0px" : null)};
    font-size: ${({ hasText, secondary }) =>
      hasText && secondary ? "12px" : null};
  }

  input {
    padding: ${({ secondary }) => (secondary ? "20px 12px 7px 0px" : null)};
    border: ${({ secondary }) => (secondary ? "0" : null)};
    border-bottom: ${({ secondary }) =>
      secondary ? "1.5px solid #338CBF" : null};
    border-radius: ${({ secondary }) => (secondary ? "0" : null)};
    &::placeholder {
      color: ${({ secondary }) => (secondary ? "transparent" : null)};
    }
  }
`;
// ${({secondary}) => secondary ? "" : null};

class InputBancoppel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
    this.myRef = React.createRef();
  }

  hasText() {
    if (this.myRef.current !== null) {
      if (this.myRef.current.value !== "") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  render() {
    const { label, secondary, ...rest } = this.props;

    return (
      <StyledInput secondary={secondary} hasText={this.hasText()}>
        {label ? <label>{label}</label> : null}
        <input {...rest} ref={this.myRef} />
      </StyledInput>
    );
  }
}

export default InputBancoppel;
