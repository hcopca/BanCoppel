import React, { Component } from "react";
import styled from "styled-components";
import blue_mark from "../Assets/blue_mark.svg";

const StyledBullets = styled.ul`
  ${(props) => console.log(props)}

  list-style: ${(props) => (props.showdots ? "none" : "")};
  display: flex;
  flex-direction: column;

  li {
    flex: 1;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    &:last-child {
      margin-bottom: 0px;
    }

    border-bottom: 1px solid var(--shadow-blue);
    &:before {
      // prettier-ignore
      ${(props) =>
        props.showdots ? `content:"•";` : `content:url(${blue_mark});`}
      color: var(--sky-blue); /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      margin: 10px;
    }
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
