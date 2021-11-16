import React, { Component } from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ReactComponent as Mas } from "../Assets/AddIcon.svg";
import { ReactComponent as Menos } from "../Assets/rest_icon.svg";
import { NavLink } from "react-router-dom";

const StyledEmpresas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .body_ {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;

    a {
      &:last-child {
        margin-bottom: 0;
      }
    }

    .item_ {
      font-size: 14px;
      font-family: futura_light;
    }
  }

  .item_ {
    font-family: futura_heavy;
    font-size: 16px;
    line-height: 110%;
    color: #ffffff;
    margin-bottom: 12px;
    cursor: pointer;
  }

  a {
    border-bottom: 2px solid transparent;

    padding-bottom: 5px;
    &:hover {
      font-family: futura_heavy;
      border-bottom: 2px solid #ffbe12;
    }
  }

  .last {
    color: #81c1ea;
    margin-bottom: 0;
    :last-child {
      margin-top: 20px;
    }
  }

  .heading {
    width: 250px;

    .accordion__button {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        fill: #338cbf;
        stroke: #338cbf;
        path {
          fill: #338cbf;
          stroke: #338cbf;
        }
      }
    }
  }

  .selected_link {
    font-family: futura_heavy;
    border-bottom: 2px solid #338cbf;
  }

  @media (min-width: 992px) {
    .heading {
      width: 300px;
    }
  }
`;

class EmpresaSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credito: false,
      integrales: false,
    };
  }

  preOpen(path) {
    const soluciones_credito = [
      "/credito_simple",
      "/crav",
      "/credito_amortizable",
      "/credito_puente",
      "/arrendamiento_financiero",
    ];
    const soluciones_integrales = [
      "/proyectos_inversion",
      "/financiamiento_ordenes_compra",
      "/monetizacion_activos",
      "/factoraje",
    ];

    if (soluciones_credito.includes(path)) {
      return "soluciones_credito";
    } else if (soluciones_integrales.includes(path)) {
      return "soluciones_integrales";
    } else {
      return "";
    }
  }

  componentDidMount() {
    const { path } = this.props;
    const kindSolutionSelected = this.preOpen(path);
    if (kindSolutionSelected === "soluciones_credito") {
      this.setState({
        credito: true,
      });
    } else if (kindSolutionSelected === "soluciones_integrales") {
      this.setState({
        integrales: true,
      });
    }
  }

  render() {
    const { setState, path } = this.props;
    return (
      <StyledEmpresas>
        <Accordion
          allowMultipleExpanded
          allowZeroExpanded
          preExpanded={[this.preOpen(path)]}
        >
          <AccordionItem className="item_" uuid="soluciones_credito">
            <AccordionItemHeading
              className="heading"
              onClick={(e) => this.setState({ credito: !this.state.credito })}
            >
              <AccordionItemButton>
                Soluciones de crédito
                {this.state.credito ? <Menos /> : <Mas />}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="body_">
                <NavLink
                  className="item_"
                  to="/credito_simple"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Crédito Simple
                </NavLink>
                {/* <NavLink
                  className="item_"
                  to="/crav"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Crédito Cuenta Corriente CRAV
                </NavLink> */}
                <NavLink
                  className="item_"
                  to="/credito_amortizable"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Crédito Cuenta Corriente
                </NavLink>
                <NavLink
                  className="item_"
                  to="/credito_puente"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Crédito Puente
                </NavLink>
                <NavLink
                  className="item_"
                  to="/arrendamiento_financiero"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Arrendamiento Financiero
                </NavLink>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="item_" uuid="soluciones_integrales">
            <AccordionItemHeading
              className="heading"
              onClick={(e) =>
                this.setState({ integrales: !this.state.integrales })
              }
            >
              <AccordionItemButton>
                Soluciones Integrales
                {this.state.integrales ? <Menos /> : <Mas />}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="body_">
                <NavLink
                  className="item_"
                  to="/proyectos_inversion"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Proyectos de inversión
                </NavLink>
                <NavLink
                  className="item_"
                  to="/financiamiento_ordenes_compra"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Financiamiento de ordenes de compra
                </NavLink>
                <NavLink
                  className="item_"
                  to="/monetizacion_activos"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Monetización de Activos
                </NavLink>
                <NavLink
                  className="item_"
                  to="/factoraje"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Factoraje
                </NavLink>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <NavLink
          className="item_"
          to="/nomina_bancoppel"
          activeClassName="selected_link"
          onClick={() => setState({ onOpen: false })}
        >
          Nómina BanCoppel
        </NavLink>
        <NavLink
          className="item_"
          to="/empresa_net"
          activeClassName="selected_link"
          onClick={() => setState({ onOpen: false })}
        >
          Empresa Net
        </NavLink>
        <NavLink
          className="item_"
          to="/cuenta_inversion_empresarial"
          activeClassName="selected_link"
          onClick={() => setState({ onOpen: false })}
        >
          Cuenta de Inversión empresarial
        </NavLink>
        <NavLink
          className="last item_"
          to="/contacto"
          activeClassName="selected_link"
          onClick={() => setState({ onOpen: false })}
        >
          Contáctanos
        </NavLink>
        <NavLink
          exact
          to="/#"
          activeClassName="selected_link"
          onClick={() => setState({ onOpen: false })}
          className="last item_"
        >
          BanCoppel Pyme
        </NavLink>
      </StyledEmpresas>
    );
  }
}

export default EmpresaSide;
