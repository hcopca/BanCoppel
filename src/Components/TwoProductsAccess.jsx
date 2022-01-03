import React, { Component } from 'react'
import styled from 'styled-components'
import { CardBlue } from '../Components';
import SecondaryCardBlue from './SecondaryCardBlue';

const StyledTwoProductsAccess = styled.div `
margin-top: 120px;
.CardBlue{
    margin: 20px;
    br{
        display: none;
    }
    max-height: 450px;
    .card_body{
        padding: 0px;
        margin: 0px;
        .copy{
            padding: 20px;
        }
    }
}
@media (min-width: 992px) { 
    display: flex;
    margin: 25px;
    
    .CardBlue{
    margin: 20px;
    img{
        height: 222px;
    }
    height: 222px;
    width: 434px !important;
    .card_body{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
	    flex-wrap: wrap;
    }
}
}
`;
export default class TwoProductsAccess extends Component {
    render() {
        return (
            <StyledTwoProductsAccess>
                  {twoProducts.map((item, idx)=>{
           return  <CardBlue key={idx} card={item} row/>
           })}
            </StyledTwoProductsAccess>
        )
    }
}

const twoProducts = [
    {
        access: (
          <>
          <span>  CATE: </span>
            <br />  800 849 6187
          </>
        ),
        homeCopy: "Ponemos a tu disposición nuestra la línea telefónica",
        image: require("../Assets/mano_empresanet.png").default,
        accessLlama: "800 849 6187"
      },
      {
        title_custom: (
          <>
            Con 
            <br /> <span>EmpresaNet</span>
          </>
        ),
        homeCopy: "Controla, administra y realiza operaciones financieras de tus cuentas de forma segura.",
        image: require("../Assets/girl_access_form.png").default,
        accessVisitala: "/empresas/empresanet"
      },
]