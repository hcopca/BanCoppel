import React, { Component } from "react";
import styled from "styled-components";
import ChevDown from "../Assets/Chev_down.svg";

const StyledSelect = styled.div`
  position: relative;
  width: 100%;
  .label {
    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: #225aa7;
    pointer-events: none;
  }

  .placeholder {
    position: absolute;
    width: 100%;
    top: 45%;
    font-family: futura_light;

    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #aaaaaa;
    z-index: 9;
    display: ${({ hasText }) => (hasText ? "none" : null)};
    pointer-events: none;
  }

  select {
    width: 100%;
    padding: 6px 0;
    border: 0;
    border-bottom: 1.5px solid #338cbf;
    font-family: futura_light;
    font-size: 16px;
    line-height: 24px;
    color: #aaaaaa;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    display: block;
    background: url(${ChevDown}) no-repeat 100% center !important;
    background-size: 15px !important;
  }

  /* secondary */
  .label {
    font-family: ${({ secondary }) => (secondary ? "futura_light" : null)};
    font-size: ${({ secondary }) => (secondary ? "14px" : null)};
    color: ${({ secondary }) => (secondary ? "#636363" : null)};
    position: ${({ secondary }) => (secondary ? "absolute" : null)};
    z-index: ${({ secondary }) => (secondary ? "1" : null)};
    top: ${({ secondary }) => (secondary ? "8px" : null)};
    left: ${({ secondary }) => (secondary ? "12px" : null)};
  }

  .placeholder {
    left: ${({ secondary }) => (secondary ? "12px" : null)};
    z-index: ${({ secondary }) => (secondary ? "10" : null)};
    top: ${({ secondary }) => (secondary ? " 45%" : null)};
  }

  select {
    padding: ${({ secondary }) => (secondary ? "25px 12px 5px 12px" : null)};
    border: ${({ secondary }) => (secondary ? "1.5px solid #225AA7" : null)};
    border-radius: ${({ secondary }) => (secondary ? "10px" : null)};
    background: url(${ChevDown}) no-repeat
      ${({ secondary }) => (secondary ? "calc(100% - 12px)" : "100%")} center !important;
  }
`;

// ${({secondary}) => secondary ? "" : null};

export default class SelectBancoppel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
    this.myRef = React.createRef();
  }

  hasText() {
    if (this.myRef.current !== null) {
      if (this.myRef.current.value !== "-1") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  render() {
    const {
      className,
      placeholder,
      secondary,
      name,
      children,
      label,
      ...rest
    } = this.props;

    return (
      <StyledSelect
        secondary={secondary}
        className={className ? className : ""}
        hasText={this.hasText()}
      >
        {label ? <label className="label">{label}</label> : null}

        {placeholder ? (
          <label className="placeholder">{placeholder}</label>
        ) : null}

        <select
          ref={this.myRef}
          name={name ? name : console.error("select > name is required")}
          {...rest}
        >
          <option value="-1"> </option>
          {children}
        </select>
      </StyledSelect>
    );
  }
}
