import React, { Component } from 'react'
import styled from 'styled-components'
import { CardBlue } from '../Components';

const StyledTwoProductsAccess = styled.div `
margin-top: 80px;
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
          padding: 10px !important;
          display: flex;
          justify-content: center;
          align-items: center;
            padding: 20px;
            p{
              text-align: center !important;
            }
            h2{
              :last-child{
                margin-top: 15px;
              }
            }
        }
    }
}
@media (min-width: 992px) { 
  display: none;
}
`;
const StyledTwoProductsAccess2 = styled.div `
display: none;
@media (min-width: 992px) { 
    display: block;
    display: flex;
    margin-top: 80px;
    margin-bottom: 44px;
    .CardBlue{
    margin: 20px;
    img{
        max-width: 212px !important;
        height: 222px;
    }
    height: 222px;
    width: 434px !important;
    .card_body{
        padding: 0;
        margin: 0;
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
          margin-top: 15px;
          width: 166px !important;
        }
        .copy{
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          h2{
            margin-top: 0;
            padding: 0;
            text-align: center;
          }
          p{
            margin: 0;
            padding: 0 !important;
            max-width: 164px;
            text-align: justify !important;
            :last-child{
              margin-top: 10px;
            }
          }
        }
    }
  }
}
@media (min-width: 1200px) { 
    display: block;
    display: flex;
    margin-top: 80px;
    margin-bottom: 44px;
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
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
          margin-top: 15px;
        }
        .copy{
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          h2{
            margin-top: 0;
            padding: 0;
            text-align: center;
          }
          p{
            margin-top: 10px;
            margin-bottom: 15px;
            :last-child{
              margin-bottom: -5px;
            }
          }
        }
    }
  }
}
`;
export default class TwoProductsAccess extends Component {
    render() {
        return (
          <>
            <StyledTwoProductsAccess>
                  {twoProducts.map((item, idx)=>{
           return  <CardBlue key={idx} card={item}/>
           })}
            </StyledTwoProductsAccess>
              <StyledTwoProductsAccess2 className="cardTwo">
              {twoProducts.map((item, idx)=>{
            return  <CardBlue key={idx} card={item} row/>
            })}
              </StyledTwoProductsAccess2>
        </>  
        )
    }
}

const twoProducts = [
    {
        access: (
          <>
          <span>  CATE: </span>  800 849 6187
          </>
        ),
        homeCopy: "Ponemos a tu disposición nuestra la línea telefónica",
        image: require("../Assets/mano_empresanet.png").default,
        accessLlama: "800 849 6187"
      },
      {
        title_custom: (
          <>
            Con  <span>EmpresaNet</span>
          </>
        ),
        homeCopy: "Controla, administra y realiza operaciones financieras de tus cuentas de forma segura.",
        image: require("../Assets/girl_access_form.png").default,
        accessVisitala: "/empresas/empresanet"
      },
]