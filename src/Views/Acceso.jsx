import React, { Component } from 'react'
import styled from 'styled-components'
// import AccesoFormulario from '../Components/AccesoFormulario';
import { TwoProductsAccess } from '../Components';
import Iframe from 'react-iframe'
const StyledAcceso = styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 iframe{
        border-radius: 10px;
        border-style: none;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 350px;
        overflow-y:hidden;
        overflow-x:hidden;
 }
 .back {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      .blue {
        background: #225AA7;
        height: 40%;
      }
      .white {
        background: white;
        height: 60%;
      }
    }
    .title{
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: 46px;
        margin-bottom: 27px;
        h2{
            font-family: Futura;
            font-size: 28px;
            line-height: 110%;
            text-align: center;
            color: #FFFFFF;
            span{
                color: #338CBF;
            }
        }
    }
  
`;

export default class Acceso extends Component {
    
    render() {
        return (
            <StyledAcceso>
            <div className="back">
                <div className="blue"></div>
                <div className="white"></div>
            </div>
            <div className="title">
                <h2>ACCESO A <br/> <span>EMPRESANET</span></h2>
            </div>
            {/* <AccesoFormulario/> */}
            
            {/* <Iframe url="10.26.211.118/empresas/loggin" */}
            <Iframe url="http://localhost:8888/login2/include/login_empresas.html"
                // width="436px"
                // height="378px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>
            
            <TwoProductsAccess/>
        </StyledAcceso>
        )
    }
}