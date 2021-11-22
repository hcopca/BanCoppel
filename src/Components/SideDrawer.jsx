import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../Assets/close.svg";
import { ReactComponent as LogoBN } from "../Assets/logo_bancoppel_empresas_b&w.svg";
import { ReactComponent as Search } from "../Assets/search.svg";
import { Link, withRouter } from "react-router-dom";
import { EmpresaSide } from "./index";

const StyledSide = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 110vh;
  z-index: 100;
  transition: all 0.6s ease;
  transform: ${({ state }) => (state ? "translateY(0)" : "translateY(-100%)")};

  .overlay {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 110vh;
    z-index: 9;
    background: rgba(0, 0, 0, 0.7);
  }

  .sideDrawer {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 100vh;
    background: #002a61;
    padding: 32px 16px;
    padding-bottom: 15vh;
    position: relative;
    z-index: 10;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        display: flex;
        align-items: center;
      }

      .close {
        margin-right: 10px;
        cursor: pointer;
      }

      a {
        display: flex;
        svg {
          width: 200px;
        }
      }
    }
    .kindUser {
      position: relative;
      margin-top: 23px;
      .line {
        width: 200vw;
        height: 2px;
        position: absolute;
        background: #338cbf;
        left: -100%;
        z-index: 9;
        bottom: 0;
      }

      button {
        position: relative;
        z-index: 10;
        width: 100px;
        padding-bottom: 18px;
        border: 0;
        background: #002a61;
        font-family: futura_light;
        font-size: 18px;
        line-height: 110%;
        text-align: center;
        color: #81c1ea;
        cursor: pointer;
        border-bottom: 2px solid #338cbf;

        &:hover {
          border-bottom: 2px solid #ffbe12;
        }
      }

      .personas {
        text-align: left;
      }

      .current {
        font-family: Futura;
        font-weight: bold;
        color: #ffffff;
        border-bottom: 2px #ffbe12 solid;
      }
    }
    .body {
      margin-top: 30px;
    }
  }

  @media (min-width: 992px) {
    .sideDrawer {
      padding: 32px;
      .header {
        a {
          svg {
            width: 313.29px !important;
            height: 30px;
          }
        }
        .close {
          width: 20px;
          height: 20px;
          margin-right: 20px;
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
    const { setState, state, location } = this.props;

    return (
      <StyledSide state={state}>
        {state ? (
          <div
            className={`overlay ${state ? "fade-in" : ""}`}
            action="close"
            onClick={() => setState({ onOpen: false })}
          ></div>
        ) : null}

        <div className="sideDrawer">
          <div className="header">
            <div>
              <Close
                className="close"
                onClick={() => setState({ onOpen: false })}
              />
              <Link to="/empresas" onClick={() => setState({ onOpen: false })}>
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
              <EmpresaSide setState={setState} path={location.pathname} />
            ) : (
              <h1>Hola Persona</h1>
            )}
          </div>
        </div>
      </StyledSide>
    );
  }
}

export default withRouter(SideDrawer);
