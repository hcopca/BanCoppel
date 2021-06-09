/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const StyledSwitcher = styled.div`
  ul {
    li {
      max-width: 100%;
      display: flex;
      margin-bottom: 20px;

      font-size: 14px;
      line-height: 18px;

      text-align: justify;
      color: var(--gray) !important;
      list-style: none;
      p {
        font-family: futura_light !important;
      }
      span {
        font-family: futura_bold;
        color: var(--gray) !important;
        letter-spacing: 1px;
      }

      a {
        color: var(--gray) !important;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      &:before {
        content: "•";
        color: var(--sky-blue); /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        margin-right: 13px;
        font-size: 28px;
      }
      &:last-child {
        margin-bottom: 0;

        &:before {
          ${(props) => (props.legals ? `content: "";` : "")}
          ${(props) => (props.legals ? `margin-right:0;` : "")}
        }
      }
    }
  }
`;

const StyledDeskHeaders = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;

    .headers {
      flex: 1;

      .desk_header {
        cursor: pointer;
        font-family: futura_bold;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        padding: 24px 0;
        color: var(--light-gray);
        border-bottom: 1.5px solid var(--shadow-blue);

        width: 70%;
        &:first-child {
          padding-top: 0;
        }

        &:hover {
          color: var(--storm-blue);
          border-bottom: 1.5px solid var(--summer-yellow);
        }
      }

      .desk_selected {
        color: var(--storm-blue);
        border-bottom: 1.5px solid var(--summer-yellow);
      }
    }
    ul.desk_body {
      flex: 3;
    }
  }
`;

const StyledAccordions = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;

const StyledAccordion = styled.div`
  .mobile_heading {
    font-family: futura_bold;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    padding: 24px 0;
    color: var(--light-gray);
    border-bottom: 1.5px solid var(--shadow-blue);
  }
  .mobile_body {
    margin-top: 24px;
  }
  .mobile_selected {
    color: var(--storm-blue);
    border-bottom: 1.5px solid var(--summer-yellow);
  }
`;

export default function SwitcherBullets(props) {
  const [state, setstate] = useState(false);
  const [selected, setselected] = useState(false);
  function createMarkup(data) {
    return { __html: data };
  }
  useEffect(() => {
    setstate(props.data.items[0]);
  }, []);

  function changeState(idx) {
    if (selected === idx) {
      setselected(null);
    } else {
      setselected(idx);
    }
  }

  return (
    <StyledSwitcher legals={state.legals ? true : false}>
      <StyledDeskHeaders>
        <div className="headers">
          {props.data.items.map((data, idx) => {
            return (
              <div
                className={`desk_header ${
                  state.title === data.title ? "desk_selected" : ""
                }`}
                key={idx}
                onClick={(e) => setstate(data)}
              >
                <h3>{data.title}</h3>
              </div>
            );
          })}
        </div>
        <ul className="desk_body">
          <>
            {state.bullets
              ? state.bullets.map((data, idx) => {
                  return (
                    <li key={idx}>
                      <p dangerouslySetInnerHTML={createMarkup(data)} />
                    </li>
                  );
                })
              : null}
            {state.legals ? (
              <li key="100">
                <p dangerouslySetInnerHTML={createMarkup(state.legals)} />
              </li>
            ) : null}
          </>
        </ul>
      </StyledDeskHeaders>
      <StyledAccordions>
        <Accordion allowZeroExpanded={true}>
          {props.data.items.map((item, idx) => {
            return (
              <StyledAccordion key={idx} id={idx}>
                <AccordionItem>
                  <AccordionItemHeading onClick={() => changeState(idx)}>
                    <AccordionItemButton
                      className={`mobile_heading ${
                        selected === idx ? "mobile_selected" : ""
                      }`}
                    >
                      <p>{item.title}</p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul className={`mobile_body`}>
                      {item.bullets
                        ? item.bullets.map((data, idx) => {
                            return (
                              <li key={idx}>
                                <p
                                  dangerouslySetInnerHTML={createMarkup(data)}
                                />
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
              </StyledAccordion>
            );
          })}
        </Accordion>
      </StyledAccordions>
    </StyledSwitcher>
  );
}
