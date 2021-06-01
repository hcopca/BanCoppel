import React from "react";
import styled from "styled-components";

const BancoppelBtn = styled.button`
  padding: 0 10px;
  height: 37px;
  min-width: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-family: "futura_heavy";
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  border: ${(props) =>
    !props.amarillo && !props.secundario ? "1.5px solid var(--storm-blue)" : 0};

  background: var(--white);
  background: ${(props) => (props.secundario ? "var(--storm-blue)" : "")};
  background: ${(props) => (props.amarillo ? "var(--summer-yellow)" : "")};
  background: ${(props) => (props.disabled ? "var(--gray)" : "")};

  color: var(--storm-blue);
  color: ${(props) => (props.secundario ? "var(--white)" : "")};
  color: ${(props) => (props.disabled ? "var(--white)" : "")};
  color: ${(props) => (props.amarillo ? "var(--night-blue)" : "")};

  /* &:hover {
    background: var(--morning-blue);

    background: ${(props) => (props.disabled ? "var(--gray)" : "")};
    color: ${(props) => (props.disabled ? "var(--white)" : "")};
  }

  &:active {
    background: red;
  } */

  @media (min-width: 576px) {
    height: 50px;
    width: 120px;
  }

  @media (min-width: 992px) {
    width: 150px;
  }

  @media (min-width: 1200px) {
    width: 180px;
  }
`;

const Button = (props) => {
  const { children } = props;

  return (
    <BancoppelBtn className="btn" theme={props} {...props}>
      {children}
    </BancoppelBtn>
  );
};

export default Button;
