import React, { Component } from "react";

import styled from "styled-components";
import Container from "./Container";
import Logo_BN from "../Assets/logo_bancoppel_b&w.svg";
import Close from "../Assets/close.svg";
import Search from "../Assets/search.svg";

const StyledSideDrawer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000000000;
  background: rgba(0, 0, 0, 0.7);
  .sideDrawer {
    background: var(--night-blue);

    padding-top: 30px;
    .container {
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .brand_close {
          display: flex;
          align-items: center;
          .close {
            margin-right: 10px;
            width: 30px;
            cursor: pointer;
          }
          a {
            margin-left: 20px;
            img.Logo_BN {
              width: 202px;
              height: 40px;
            }
          }
        }
        img.Search {
          width: 30px;
        }
      }
    }
    .line {
      margin-top: 50px;
      margin-bottom: 30px;
      display: flex;
      .blue {
        background: var(--morning-blue);
        flex: 1;
        height: 2px;
        &:last-child {
          flex: 3;
        }
      }
      .yellow {
        flex: 1;
        height: 2px;
        background: var(--yellow);
      }
    }
    .navigation {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .navigation-item {
        transition: all 0.2s ease-in-out;
        margin-bottom: 30px;
        color: var(--white);
        font-family: Futura;
        font-size: 14px;
        line-height: 130%;
        &:hover {
          color: var(--morning-blue);
        }
      }
    }
  }
`;

export default class SideDrawer extends Component {
  componentWillUnmount() {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
  }

  setModal(e) {
    if (this.props.setState) {
      if (e.target.dataset.action === "close") {
        this.props.setState({ onOpen: false });
      }
    }
  }

  render() {
    return (
      <StyledSideDrawer data-action="close" onClick={(e) => this.setModal(e)}>
        <div className="sideDrawer">
          <Container>
            <div className="header">
              <div className="brand_close">
                <img
                  src={Close}
                  alt="close"
                  className="close"
                  onClick={() => this.props.setState({ onOpen: false })}
                />
                <a href="/">
                  <img src={Logo_BN} alt="Logo_BN" className="Logo_BN" />
                </a>
              </div>
              <img src={Search} alt="Search" className="Search" />
            </div>
          </Container>
          <div className="line">
            <div className="blue"></div>
            <div className="yellow"></div>
            <div className="blue"></div>
          </div>
          <Container>
            <div className="navigation">
              {/* TODO */}
              <a href="/soluciones" className="navigation-item ">
                Cuenta Eje
              </a>

              <a href="/empresa_net" className="navigation-item ">
                EmpresaNet
              </a>
              <a href="/nomina_bancoppel" className="navigation-item ">
                Nómina BanCoppel
              </a>

              {/* TODO */}
              <a href="/soluciones" className="navigation-item ">
                BanCoppel Pyme
              </a>
            </div>
          </Container>
        </div>
      </StyledSideDrawer>
    );
  }
}
