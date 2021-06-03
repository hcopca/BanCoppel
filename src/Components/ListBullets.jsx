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
    p {
      font-family: futura_light;
      font-size: 12px;
    }
    &:first-child {
      margin-top: 0;
      padding-top: 0;
    }
    @media (min-width: 992px) {
      padding-bottom: 15px;
      margin-top: 52px;
      p {
        font-size: 16px;
      }
    }

    &:before {
      // prettier-ignore
      ${(props) =>
        props.showdots ? `content:"•";` : `content:url(${blue_mark});`}
      color: var(--sky-blue); /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      margin-right: 23px;
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
