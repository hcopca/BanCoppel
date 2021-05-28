import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import BancoppelBtn from "./BancoppelBtn";
import SideDrawer from "./SideDrawer";
import AccesoForm from "./AccesoForm";
import Logo from "../Assets/logo_bancoppel_empresas.svg";
import SecondaryNav from "./SecondaryNav";

const StyledNavbar = styled.div`
  background: var(--white);
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--shadow-blue);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .brand {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1.3;

      .hamburger {
        cursor: pointer;
        width: 24px;
        height: 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        margin-right: 10px;
        .ham-item {
          width: 100%;
          height: 3px;
          background: var(--storm-blue);
          border-radius: 10px;
          padding: 1px;
        }
        .center {
          width: 70%;
        }
      }
      img {
        max-width: 80%;
      }
    }
    .navigation {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 100vw !important;
      min-width: 100vw;
      background: red;
    }
  }

  @media (min-width: 992px) {
    .container {
      .brand {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          max-width: 70%;
        }
        .hamburger {
          margin-right: 23px;
        }
      }
      .navigation {
        flex: 1;
        display: flex;
        justify-content: space-evenly;
        .navigation-item {
          margin-right: 10px;
          &:last-child {
            margin-right: 0;
          }
        }
        .acceso {
          position: relative;
        }
      }
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { onOpen: false, openAcceso: false };
  }

  render() {
    // console.log(this.state);
    return (
      <>
        <StyledNavbar className="bancoppel_nav">
          <Container>
            <div className="brand">
              <div
                className="hamburger"
                onClick={() => this.setState({ onOpen: true })}
              >
                <div className="ham-item"></div>
                <div className="ham-item center"></div>
                <div className="ham-item"></div>
              </div>

              <img className="bancoppel_logo" src={Logo} alt="" />
            </div>
            <div className="navigation">
              <NavLink to="/" className="navigation-item">
                <BancoppelBtn onClick={() => console.log("Hola")}>
                  Personas
                </BancoppelBtn>
              </NavLink>
              <NavLink to="/" className="navigation-item">
                <BancoppelBtn>Empresas</BancoppelBtn>
              </NavLink>
              <div className="acceso">
                <BancoppelBtn
                  secundario
                  onClick={() =>
                    this.setState({ openAcceso: !this.state.openAcceso })
                  }
                >
                  Acceso
                </BancoppelBtn>
                {this.state.openAcceso ? (
                  <AccesoForm setState={this.setState.bind(this)} />
                ) : null}
              </div>
            </div>
          </Container>
        </StyledNavbar>
        <SecondaryNav />
        {this.state.onOpen ? (
          <SideDrawer setState={this.setState.bind(this)} />
        ) : null}
      </>
    );
  }
}

export default Navbar;
