import React, { Component } from "react";
import styled from "styled-components";
import Container from "./Container";
import perfil_solicitante_only from "../Assets/perfil.png";

const Styledperfil = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      position: relative;
      z-index: 10;
      max-width: 100%;
      max-height: 300px;
    }

    .bullets {
      margin-top: 20px;
      list-style: none;
      padding: 0;
      margin: 0;

      position: relative;
      z-index: 9;
      .line {
        display: block;
      }
      p {
        margin-top: 40px;
        font-family: lato_bold;
        font-size: 14px;
        line-height: 130%;
        color: #002a61;
        position: relative;

        display: flex;
        align-items: center;
        br {
          display: none;
        }

        span {
          color: #338cbf;
          margin-right: 10px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      flex-direction: row;

      .bullets {
        margin-left: 60px;
        p {
          margin-top: 60px;
          br {
            display: block;
          }

          &:first-child {
            margin-top: 0px;
          }

          .line {
            border-bottom: 1px dotted #338cbf;
            position: absolute;
            left: -100%;
            width: 100%;
            top: 0;
            bottom: 0;
            height: 1px;
            margin: auto;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
  }
`;

class PerfilSolicitante extends Component {
  render() {
    return (
      <Styledperfil>
        <Container>
          <img src={perfil_solicitante_only} alt="" />
          <div className="bullets">
            {this.props.bullets
              ? this.props.bullets.map((ele, idx) => (
                  <p key={idx}>
                    <span>• </span>
                    {ele} <div className="line"></div>
                  </p>
                ))
              : null}
          </div>
        </Container>
      </Styledperfil>
    );
  }
}

export default PerfilSolicitante;
