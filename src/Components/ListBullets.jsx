import React, { Component } from "react";
import styled from "styled-components";
import blue_mark from "../Assets/blue_mark.svg";

const StyledBullets = styled.ul`
  list-style: ${(props) => (props.showdots ? "none" : "")};
  display: flex;
  flex-direction: column;

  li {
    flex: 1;
    display: flex;
    border-bottom: 1px solid var(--shadow-blue);
    /* padding-bottom: 10px; */
    /* margin-top: 40px; */
    padding: 15px 0;
    &:first-child {
      margin-top: 0;
    }

    @media (min-width: 992px) {
      align-items: flex-end;
      margin-top: 0px;
      padding-bottom: 10px;
    }

    &:before {
      // prettier-ignore
      ${(props) =>
        props.showdots ? `content:"•";` : `content:url(${blue_mark});`}
      color: var(--sky-blue); /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      margin-right: 10px;
    }
  }

  @media (min-width: 992px) {
    height: 490px;
  }
`;

export default class ListBullets extends Component {
  render() {
    return (
      <StyledBullets showdots={this.props.showdots}>
        {this.props.bullets.map((bull, idx) => {
          return (
            <li key={idx}>
              <p>{bull}</p>
            </li>
          );
        })}
      </StyledBullets>
    );
  }
}
