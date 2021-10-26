import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BancoppelBtn from "./BancoppelBtn";
import SideDrawer from "./SideDrawer";
import AccesoForm from "./AccesoForm";
import Logo from "../Assets/logo_bancoppel_letras_azules.svg";
import SecondaryNav from "./SecondaryNav";

const StyledNavbar = styled.div`
  background: var(--white);
  padding: 16px;
  padding-top: 35px;

  border-bottom: 2px solid var(--shadow-blue);
  .nav_container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .brand {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;

      a {
        display: flex;
        img {
          width: 290px;
          height: 26px;
        }
      }

      .hamburger {
        cursor: pointer;
        width: 24px;
        height: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        margin-right: 32px;
        .ham-item {
          width: 100%;
          height: 2px;
          background: var(--storm-blue);
          border-radius: 10px;
          padding: 1px;
        }
        .center {
          width: 70%;
        }
      }
      img {
        max-width: 95%;
      }
    }
    .navigation {
      display: none;
    }
  }

  @media (min-width: 992px) {
    padding: 15px 32px;
    .nav_container {
      .brand {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        a {
          img {
            width: 258px;
            height: 28px;
          }
        }
        .hamburger {
          margin-right: 23px;
        }
      }
      .navigation {
        display: flex;
        justify-content: flex-end;
        position: relative;
        .navigation-item {
          margin-right: 27px;
          &:last-child {
            margin-right: 0;
          }
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
    return (
      <>
        <StyledNavbar className="bancoppel_nav">
          <div className="nav_container">
            <div className="brand">
              <div
                className="hamburger"
                onClick={() => this.setState({ onOpen: true })}
              >
                <div className="ham-item"></div>
                <div className="ham-item center"></div>
                <div className="ham-item"></div>
              </div>
              <a href="/">
                <img className="bancoppel_logo" src={Logo} alt="" />
              </a>
            </div>
            <div className="navigation">
              <NavLink to="/" className="navigation-item">
                <BancoppelBtn>Personas</BancoppelBtn>
              </NavLink>
              <NavLink to="/" className="navigation-item">
                <BancoppelBtn>Empresas</BancoppelBtn>
              </NavLink>

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
        </StyledNavbar>
        <SecondaryNav />

        <SideDrawer
          setState={this.setState.bind(this)}
          state={this.state.onOpen}
        />
      </>
    );
  }
}

export default Navbar;
