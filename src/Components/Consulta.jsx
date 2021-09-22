import React from 'react'
import { Container } from '.'
import Button from './BancoppelBtn';
import styled from 'styled-components'
const StyledConsulta = styled.div`
margin-top: 50px;
.text{
    font-family: futura_light;
    font-size: 16px;
    line-height: 110%;
    color: #636363;
}
.down {
    margin-top: 30px;
}
.boton{
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 80px;
    button{
        width: 236px;
        height: 60px;
    }
}
@media (min-width: 992px) {
    margin-top: 100px;
    .text{
        font-size: 16px;
    }
    .boton{
        justify-content: flex-start;
    }
}
`;
export default function Consulta() {
    return (
        <StyledConsulta>
            <Container>
                <div className="text">
                    <p>
                    UNE <br />
                    BanCoppel S.A. Institución de Banca Múltiple recibe las consultas, reclamaciones o aclaraciones, en su Unidad Especializada de Atención a Usuarios, ubicada en Insurgentes Sur No. 553 Piso 6, Col. Escandón II, Alcaldía Miguel Hidalgo, C.P. 11800, Ciudad de México y por correo electrónico <a href="mailto:une@bancoppel.com">une@bancoppel.com</a>
 o al teléfono <a href="tel:5552780000">(55) 5278 0000</a>, así como en cualquiera de sus sucursales u oficinas.
                    </p>
                </div>

                <div className="text down">
                    <p>
                    CONDUSEF <br />
                    En el caso de no obtener una respuesta satisfactoria, podrás acudir a la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros en www.condusef.gob.mx , o a los teléfonos <a href="tel:5553400999">(55) 5340 0999</a>
 y <a href="tel:8009998080">800 999 8080</a>.
                    </p>
                </div>

                <div className="boton">
                        <Button tercero>Consulta tasas y comisiones</Button>
                </div>
            </Container>
        </StyledConsulta>
    )
}
