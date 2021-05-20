import React, { Component } from "react";
import styled from "styled-components";
import Mostrar from "../Assets/Mostrar.svg";
// ${(props) => console.log(props)}
const StyledInput = styled.div`
  position: relative;

  label {
    transition: all 0.3s ease-in-out;
    font-size: ${(props) => (props.focus || props.hasText ? "12px" : "16px")};
    font-family: futura_book;
    color: var(--gray);
    position: absolute;

    left: 10px;
    top: ${(props) => (props.focus || props.hasText ? "-25%" : "25%")};
    /* bottom: 0; */

    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 0;
    border-bottom: 2px solid var(--sky-blue);
    font-family: futura_book;
    font-size: 18px;

    &::placeholder {
      color: transparent;
    }
    &:focus {
      outline: none;
    }
  }

  .mostrar {
    position: absolute;
    top: 10px;
    right: 0;
    cursor: pointer;
  }
`;

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
      } else {
        this.myRef.current.type = "text";
      }
    }
  }
  render() {
    // console.log(this.props);
    return (
      <StyledInput focus={this.state.focus} hasText={this.hasText()}>
        {this.props.placeholder ? (
          <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        ) : null}
        <input
          ref={this.myRef}
          {...this.props}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
        />
        {this.props.type === "password" ? (
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
