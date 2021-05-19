import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import BancoppelBtn from "./BancoppelBtn";
import SideDrawer from "./SideDrawer";
import Logo from "../Assets/logo_bancoppel_empresas.svg";

const StyledNavbar = styled.div`
  background: var(--white);
  padding-top: 40px;
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
      flex: 1;
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
        max-width: 100%;
      }
    }
    .navigation {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .container {
      .brand {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          max-width: 80%;
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
      }
    }
  }

  @media (min-width: 992px) {
    .container {
      .brand {
        img {
          max-width: 100%;
        }
      }
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { onOpen: false };
  }

  render() {
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
              <NavLink to="/soluciones" className="navigation-item">
                <BancoppelBtn amarillo>Empresas</BancoppelBtn>
              </NavLink>
              <NavLink to="/soluciones" className="navigation-item">
                <BancoppelBtn secundario>Acceso</BancoppelBtn>
              </NavLink>
            </div>
          </Container>
        </StyledNavbar>
        {this.state.onOpen ? (
          <SideDrawer setState={this.setState.bind(this)} />
        ) : null}
      </>
    );
  }
}

export default Navbar;
