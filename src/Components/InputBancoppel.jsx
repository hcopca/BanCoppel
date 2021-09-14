import React, { Component } from "react";
import styled from "styled-components";
import Mostrar from "../Assets/Mostrar.svg";
//
const StyledInput = styled.div`
  position: relative;

  label {
    transition: all 0.3s ease-in-out;

    font-family: futura_book;
    color: var(--gray);

    position: absolute;
    top: ${({ hasText, focus, example }) =>
      hasText || focus || example ? "17%" : "50%"};
    left: 15px;
    right: 0;
    transform: ${({ hasText, focus, example }) =>
      hasText || focus || example ? "translateY(-17%)" : "translateY(-50%)"};
    font-size: ${({ hasText, focus, example }) =>
      hasText || focus || example ? "12px" : "16px"};

    pointer-events: none;
  }

  p {
    font-family: futura_book;
    color: var(--gray);

    position: absolute;
    bottom: 10px;
    left: 15px;
    right: 0;

    font-size: 16px;

    pointer-events: none;
  }

  input {
    width: 100%;
    padding-top: 21px;
    padding-bottom: 9px;
    padding-left: 15px;
    padding-right: 15px;

    border-bottom: 2px solid var(--sky-blue);
    font-family: futura_book;
    font-size: 18px;

    border: ${({ secondary }) =>
      secondary ? "2px solid var(--sky-blue)" : null};

    border-radius: ${({ secondary }) => (secondary ? "10px" : null)};

    &::placeholder {
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
        return false;
      } else {
        this.myRef.current.type = "text";
        return true;
      }
    }
  }
  render() {
    const {
      className,
      name,
      type,
      placeholder,
      secondary,
      value,
      example,
      ...rest
    } = this.props;

    console.log("Hola");

    return (
      <StyledInput
        className={className ? className : ""}
        focus={this.state.focus}
        hasText={this.hasText()}
        secondary={secondary}
        example={example}
      >
        {placeholder ? <label htmlFor={name}>{placeholder}</label> : null}

        <input
          ref={this.myRef}
          {...rest}
          type={type}
          placeholder={example ? example : null}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
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
