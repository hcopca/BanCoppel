import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import AddIcon from "../Assets/AddIcon.svg";
import restIcon from "../Assets/rest_icon.svg";

const StyledAccordions = styled.div`
  background: var(--light-blue);

  padding: 25px 0;

  @media (min-width: 992px) {
    display: none;
  }
`;

const StyledAccordion = styled.div`
  padding-bottom: 10px;

  &:last-child {
    padding-bottom: 0;
  }
  .active {
    border-bottom: 0px solid var(--shadow-blue) !important;
  }

  .heading {
    .accordion-header {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      border-bottom: ${(props) =>
          props.arr.length - 1 === props.id ? "0" : "1px"}
        solid var(--shadow-blue);

      img {
        width: 30px;
        height: 30px;
      }
      p {
        color: var(--night-blue);
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .accordion-body {
    margin: 10px 0;
  }
`;

const AccordionCoppel = ({ items, body }) => {
  const [state, setstate] = useState(null);
  function chanState(idx) {
    if (state === idx) {
      setstate(null);
    } else {
      setstate(idx);
    }
  }

  return (
    <StyledAccordions>
      <Container>
        <Accordion allowZeroExpanded={true}>
          {items.map((item, idx) => {
            return (
              <StyledAccordion key={idx} arr={items} id={idx}>
                <AccordionItem>
                  <AccordionItemHeading
                    className="heading"
                    onClick={(e) => chanState(idx)}
                  >
                    <AccordionItemButton
                      className={`accordion-header ${
                        state === idx ? "active" : ""
                      }`}
                    >
                      <p>{item.section}</p>
                      <img src={state === idx ? restIcon : AddIcon} alt="" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordion-body">
                    {body
                      ? body(item)
                      : console.error(
                          "Necesitas una funcion que rendere el cuerpo de cada item. De esta forma podemos ocupar el mismo componente, con los mismos headers pero cambiando solo el cuerpo de cada acordeón según se necesite."
                        )}
                  </AccordionItemPanel>
                </AccordionItem>
              </StyledAccordion>
            );
          })}
        </Accordion>
      </Container>
    </StyledAccordions>
  );
};

export default AccordionCoppel;
