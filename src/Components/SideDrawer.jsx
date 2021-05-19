import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import Logo_BN from "../Assets/logo_bancoppel_b&w.svg";
import Close from "../Assets/close.png";
import Search from "../Assets/search.png";

const StyledSideDrawer = styled.div`
  background: var(--night-blue);
  position: absolute;
  top: 0;
  width: 100vw;
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
        img.Logo_BN {
          width: 70%;
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
  @media (min-width: 768px) {
    height: auto;
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
  render() {
    return (
      <StyledSideDrawer>
        <Container>
          <div className="header">
            <div className="brand_close">
              <img
                src={Close}
                alt="close"
                className="close"
                onClick={() => this.props.setState({ onOpen: false })}
              />
              <img src={Logo_BN} alt="Logo_BN" className="Logo_BN" />
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
            <NavLink to="/soluciones" className="navigation-item ">
              Cuenta Eje
            </NavLink>
            <NavLink to="/soluciones" className="navigation-item ">
              EmpresaNet
            </NavLink>
            <NavLink to="/soluciones" className="navigation-item ">
              Nómina BanCoppel
            </NavLink>
            <NavLink to="/soluciones" className="navigation-item ">
              BanCoppel Pyme
            </NavLink>
          </div>
        </Container>
      </StyledSideDrawer>
    );
  }
}
