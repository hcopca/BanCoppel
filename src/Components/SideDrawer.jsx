import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "./index";
import { ReactComponent as Close } from "../Assets/close.svg";
import { ReactComponent as LogoBN } from "../Assets/logo_bancoppel_empresas_b&w.svg";
import { ReactComponent as Search } from "../Assets/search.svg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { ReactComponent as Mas } from "../Assets/AddIcon.svg";
import { ReactComponent as Menos } from "../Assets/rest_icon.svg";

import { NavLink, Link, withRouter } from "react-router-dom";

const StyledSide = styled.div`
  position: fixed;
  top: 0;

  width: 100vw;
  height: 110vh;
  z-index: 100;

  pointer-events: ${({ state }) => (state ? "all" : "none")};
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 9;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
  .side {
    position: relative;
    z-index: 10;
    background: #002a61;
    padding-top: 33px;
    padding-bottom: 33px;
    transition: all 0.5s ease;
    transform: ${({ state }) =>
      state ? "translateY(0)" : "translateY(-100%)"};

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      div {
        display: flex;
        align-items: center;

        .close {
          margin-right: 10px;
          width: 24px;
          height: 24px;
          transition: all 0.5s ease;

          &:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
        }
        a {
          display: flex;
          align-items: center;

          .logo {
            margin-right: 10px;
            width: 200px;
            height: 34px;
          }
        }
      }
      .search {
        transition: all 0.5s ease;
        width: 24px;
        height: 24px;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
    }

    .kindUser {
      position: relative;
      button {
        width: 100px;
        padding-bottom: 18px;
        background-color: transparent;
        border: 0;
        font-family: futura_light;
        font-size: 18px;
        line-height: 110%;
        color: #81c1ea;
        cursor: pointer;

        position: relative;
        z-index: 10;
        border-bottom: 1.5px transparent solid;
        &:hover {
          border-bottom: 1.5px #ffbe12 solid;
        }
      }

      .current {
        font-family: Futura;
        font-weight: bold;
        color: #ffffff;
        border-bottom: 1.5px #ffbe12 solid;
      }

      .personas {
        text-align: left;
      }

      .line {
        width: 200vw;
        height: 1px;
        position: absolute;
        background: #338cbf;
        left: -100%;
        z-index: 9;
        bottom: 0;
      }
    }

    .body {
      padding-top: 30px;
    }
  }

  .fade-in {
    animation: ${({ state }) => (state ? "fadeIn .8s" : "")};
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 576px) {
    .side {
      .header {
        .close {
          margin-right: 22px !important;
        }

        .logo {
          margin-right: 0px !important;
          width: 313.29px !important;
        }
      }

      .kindUser {
        button {
          width: 140px;
        }
      }
    }
  }
`;

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 2,
    };
  }

  componentDidUpdate() {
    const { state } = this.props;

    if (state) {
      document.body.style.overflow = "hidden";
      document.body.scroll = "no";
    } else {
      document.body.style.overflow = "scroll";
      document.body.scroll = "yes";
    }
  }
  render() {
    const { state, setState, location } = this.props;

    return (
      <StyledSide state={state}>
        {state ? (
          <div
            className={`overlay fade-in`}
            onClick={() => setState({ onOpen: false })}
          ></div>
        ) : null}

        <div className="side">
          <Container>
            <div className="header">
              <div>
                <Close
                  className="close"
                  onClick={() => setState({ onOpen: false })}
                />
                <Link to="/" onClick={() => setState({ onOpen: false })}>
                  <LogoBN className="logo" />
                </Link>
              </div>
              <Search className="search" />
            </div>
            <div className="kindUser">
              <button
                onClick={() => this.setState({ view: 1 })}
                className={`personas ${this.state.view === 1 ? "current" : ""}`}
              >
                Personas
              </button>
              <button
                onClick={() => this.setState({ view: 2 })}
                className={`empresas ${this.state.view === 2 ? "current" : ""}`}
              >
                Empresas
              </button>

              <div className="line"></div>
            </div>

            <div className="body">
              {this.state.view === 2 ? (
                <Empresas setState={setState} path={location.pathname} />
              ) : (
                <Personas setState={setState} path={location.pathname} />
              )}
            </div>
          </Container>
        </div>
      </StyledSide>
    );
  }
}

export default withRouter(SideDrawer);

const StyledPersonas = styled.div``;

class Personas extends Component {
  render() {
    // const { setState } = this.props;

    return <StyledPersonas></StyledPersonas>;
  }
}

const StyledEmpresas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .item_ {
    font-family: futura_light;
    font-size: 18px;
    line-height: 110%;
    color: #ffffff;
    border-bottom: 1.5px transparent solid;

    cursor: pointer;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    &:hover {
      font-family: futura_normal;
      border-bottom: 1.5px #ffbe12 solid;
    }
  }
  a.last {
    color: #81c1ea;
  }

  .selected_link {
    border-bottom: 1.5px solid #81c1ea;
    font-family: futura_normal;
  }

  .heading {
    .acordion_name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 250px;
      svg {
        fill: #81c1ea;
        height: 20px !important;
        path {
          height: 20px !important;

          fill: #81c1ea;
          stroke: #81c1ea;
        }
      }
    }
  }

  .accordion-body {
    .body_ {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
      a {
        margin-left: 30px;
      }
    }
  }
`;

class Empresas extends Component {
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

  render() {
    const { setState, path } = this.props;

    return (
      <StyledEmpresas>
        <Accordion
          allowMultipleExpanded
          allowZeroExpanded
          preExpanded={this.preOpen(path)}
        >
          <AccordionItem uuid="soluciones_credito">
            <AccordionItemHeading
              className="heading item_"
              onClick={(e) => this.setState({ credito: !this.state.credito })}
            >
              <AccordionItemButton className="acordion_name">
                Soluciones de crédito
                {this.state.credito ? <Menos /> : <Mas />}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion-body">
              <div className="body_">
                <NavLink
                  className="item_"
                  to="/credito_simple"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Crédito Simple
                </NavLink>
                <NavLink
                  className="item_"
                  to="/crav"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Crédito Cuenta Corriente CRAV
                </NavLink>
                <NavLink
                  className="item_"
                  to="/credito_amortizable"
                  activeClassName="selected_link"
                  onClick={() => setState({ onOpen: false })}
                >
                  Crédito Cuenta Corriente Amortizable
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

          <AccordionItem uuid="soluciones_integrales">
            <AccordionItemHeading
              className="heading item_"
              onClick={(e) =>
                this.setState({ integrales: !this.state.integrales })
              }
            >
              <AccordionItemButton className="acordion_name">
                Soluciones Integrales
                {this.state.integrales ? <Menos /> : <Mas />}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion-body">
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
