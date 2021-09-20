import React, { Component } from "react";
import styled from "styled-components";
import Mostrar from "../Assets/Mostrar.svg";

const StyledInput = styled.div`
  position: relative;

  label {
    transition: all 0.3s ease-in-out;
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

  .mostrar {
    position: absolute;
    top: 10px;
    right: 0;
    cursor: pointer;
  }

  /* SECONDARY */
  label.secondary {
    position: absolute;
    font-size: ${({ hasText }) => (hasText ? "12px" : "18px")};
    bottom: 0;
    left: ${({ hasText }) => (hasText ? "0px" : "12px")};
    transform: ${({ hasText }) => (hasText ? "translateY(-20px)" : null)};
  }

  &:hover label.secondary {
    font-size: 12px;
    transform: translateY(-20px);
    left: 0;
  }
  &:target {
    background: red;
  }

  input {
    padding: ${({ secondary }) => (secondary ? "20px 0px 7px 0px" : null)};
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

  showPassword() {
    if (this.myRef.current !== null) {
      if (this.myRef.current.type === "text") {
        this.myRef.current.type = "password";
        return false;
      } else {
        this.myRef.current.type = "text";
        return true;
      }
    }
  }

  render() {
    const { type, label, secondary, ...rest } = this.props;

    return (
      <StyledInput
        secondary={secondary}
        hasText={this.hasText() || this.state.focus}
      >
        {secondary ? (
          label ? (
            <label className="secondary">{label}</label>
          ) : null
        ) : label ? (
          <label>{label}</label>
        ) : null}

        <input
          {...rest}
          ref={this.myRef}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          type={type}
        />

        {type === "password" ? (
          <img
            src={Mostrar}
            alt="Mostrar"
            className="mostrar"
            onClick={() => this.showPassword()}
          />
        ) : null}
      </StyledInput>
    );
  }
}

export default InputBancoppel;
