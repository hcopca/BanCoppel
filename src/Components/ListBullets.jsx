import React, { Component } from "react";
import styled from "styled-components";
import blue_mark from "../Assets/check.svg";

const StyledBullets = styled.ul`
  list-style: ${(props) => (props.showdots ? "none" : "")};
  display: flex;
  flex-direction: column;
  * {
    /* border: 1px solid red; */
  }

  li {
    flex: 1;
    max-width: 621px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--shadow-blue);
    /* padding-bottom: 10px; */
    /* margin-top: 40px; */
    padding: 15px 0;
    p {
      font-family: futura_book;
      font-size: 14px;
    }
    &:first-child {
      margin-top: 0;
      padding-top: 0;
    }
    &:last-child {
      border-bottom: 0px solid var(--shadow-blue);
    }
    @media (min-width: 992px) {
      padding-bottom: 15px;
      margin-left: 170px;
      p {
        font-size: 16px;
        
      }
    }

    &:before {
      // prettier-ignore
      content: ${({ showdots }) => (showdots ? "•" : `url(${blue_mark})`)};
      color: var(--sky-blue); /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      margin-right: 23px;
      font-size: 28px;
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
