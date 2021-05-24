import React from "react";
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

const StyledAccordions = styled.div`
  background: var(--light-blue);
`;

const StyledAccordion = styled.div`
  padding: 10px 0;
  .accordion-header {
    &:focus {
      outline: none !important;
    }
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    img {
      width: 30px;
      height: 30px;
    }
    p {
      color: var(--night-blue);
      font-size: 16px;
    }
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const AccordionCoppel = ({ items, body }) => {
  return (
    <StyledAccordions>
      <Container>
        <Accordion allowZeroExpanded={true}>
          {items.map((item, idx) => {
            return (
              <StyledAccordion key={idx}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-header">
                      <p>{item.section}</p>
                      <img src={AddIcon} alt="" />
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
