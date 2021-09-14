import React from 'react'
// import { Container } from '.'
import Button from './BancoppelBtn';
import styled from 'styled-components'


const StyledTeInteresa = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
.header{
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    background-color: var(--night-blue);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    flex-direction: column;

    h1{
    margin-top: 25px;
    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 110%;
    color: white;
    }
    p{
    margin-top: 10px;
    font-family: Futura;
    font-size: 14px;
    line-height: 110%;
    color: white;
    }
    .boton{
        display: flex;
        justify-content: center;
        margin-top: 25px;
        margin-bottom: 20px;
    }

}
@media (min-width: 992px) {
.header{
    h1{
    font-size: 36px;
    }
    p{
    font-size: 24px;
    }
}
   
}
`;
export default function TeInteresa() {
    return (
        <StyledTeInteresa>
                <div className="header">
                    <h1>¿Te interesa?</h1>
                    <p>Consúltalo directamente con un ejectivo</p>
                    <div className="boton">
                    <Button amarillo>¡Déjanos tus datos!</Button>
                    </div>
                </div>
        </StyledTeInteresa>
    )
}
