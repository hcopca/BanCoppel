import React, { Component } from 'react'
import styled from 'styled-components'
import AccesoFormulario from '../Components/AccesoFormulario';
import { TwoProductsAccess } from '../Components';
const StyledAcceso = styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
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
            <AccesoFormulario/>
            <TwoProductsAccess/>
        </StyledAcceso>
        )
    }
}