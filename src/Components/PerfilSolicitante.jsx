import React, { Component } from "react";
import styled from "styled-components";
import Container from "./Container";

import Perfil_solicitante from "../Assets/perfil-lineas.png";
import perfil_solicitante_only from "../Assets/perfil.png";

const TextoBullets = styled.div`

    display: flex;
    flex-direction:column;
    justify-content:space-between;

    height: 147px;
    margin-top: 30px;
    margin-left:15px;
    width:204px;
    font-family: lato_bold;
    color: #002A61;
    font-weight: bold;
    font-size: 14px;
`;

const ImagenPerfil = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PerfilSolicitanteResponsive = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width: 100%;
    font-family: lato_bold;
    color: #002A61;
    font-weight: bold;
    font-size: 14px;

    img{
        margin-bottom:63px;
    }
    ul {
        display:block;
        list-style: none;
        padding: 0 35px;
        // list-style-position: outside;

      }
    li{
        margin-bottom:63px;
    }

    li::before {
        content: "\\2022";
        color: #338CBF !important;
        font-weight: bold;
        display: inline-block; 
        width: 7px;
        height: 7px;
        // margin-right:1em;
        //// margin-left: -1em;

        margin-left: -17px;  /* this is to move the icon left */
        padding-right: 10px; /* to keep some space between icon and text */
      }

      @media (min-width: 768px) {
        display: none;
      }
`;

class PerfilSolicitante extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }




  render() {
    return (
        <Container>
            <ImagenPerfil>
                <img src={Perfil_solicitante} alt="" style={{height:'298px'}}/>
                <TextoBullets>
                {this.props.primer_bullet? <label style={{marginBottom:'37px'}}>{this.props.primer_bullet}</label> : <label style={{marginTop:'12px'}}>Personas Morales.</label>}
                {this.props.segundo_bullet? <label style={{marginBottom:'37px'}}>{this.props.segundo_bullet}</label> : <label style={{marginBottom:'37px'}}>Personas Físicas con Actividad Empresarial.</label>}
                {/* {this.props.tercer_bullet?<label>{this.props.tercer_bullet}</label> : <label>Propietarios de un inmueble que arrienden a Grupo Coppel.</label>} */}
                </TextoBullets>
            </ImagenPerfil>

            <PerfilSolicitanteResponsive>
                <img src={perfil_solicitante_only} alt="" style={{minWidth:'183.72px', maxWidth:'250.72px'}}/>
                <ul>
                    {this.props.primer_bullet? <li>{this.props.primer_bullet}</li> : <li style={{marginTop:'-55px'}}>Personas Morales.</li>}
                    {this.props.segundo_bullet? <li>{this.props.segundo_bullet}</li> : <li>Personas Físicas con Actividad Empresarial.</li>}
                    {/* {this.props.tercer_bullet? <li>{this.props.tercer_bullet}</li> : <li>Propietarios de un inmueble que arrienden a Grupo Coppel.</li>} */}
                </ul>          
            </PerfilSolicitanteResponsive>
        </Container>
    );
  }
}
export default PerfilSolicitante;

