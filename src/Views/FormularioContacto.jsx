import React from "react";
import styled from "styled-components";
import {
  Container,
  InputBancoppel,
  BancoppelBtn,
  SelectBancoppel,
} from "../Components";
import Fondo from "../Assets/fondo_contacto.png";
import Fondo_responsive from "../Assets/formulario_fondo_responsive.png";

const StyledContacto = styled.div`
  /* * {
    border: 1px solid red;
  } */
  padding: 60px 0;
  background-image: url(${({ imgResponsive }) => imgResponsive});
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      width: 100%;
      max-width: 497px;
      background: #ffffff;
      box-shadow: 0px 10.8621px 10.8621px rgba(0, 0, 0, 0.1);
      border-radius: 8.68966px;
      padding: 30px;

      .headers {
        margin-bottom: 25px;
        h1 {
          font-family: futura_bold;
          font-size: 32px;
          line-height: 110%;
          color: var(--night-blue);
          margin-bottom: 8px;
          span {
            color: var(--blue);
          }
        }
        p {
          font-size: 16px;
          line-height: 110%;
          font-family: futura_light;
          color: #636363;
        }
      }

      .input_formulario {
        width: 100%;
        margin-bottom: 15px;
      }

      button {
        width: 200px;
        height: 50px;
      }
    }
  }
`;

export default function FormularioContacto() {
  return (
    <StyledContacto img={Fondo} imgResponsive={Fondo_responsive}>
      <Container>
        <form action="">
          <div className="headers">
            <h1>
              Estás muy cerca de comenzar <span>tu historia con nosotros</span>
            </h1>
            <p>Deja tus datos y un asesor se pondrá en contacto contigo.</p>
          </div>
          <InputBancoppel
            required
            type="text"
            className="input_formulario"
            secondary
            name="name"
            placeholder="Nombre Completo"
            example="Alexander Ramírez Rodriguez"
          />
          <InputBancoppel
            required
            type="email"
            className="input_formulario"
            secondary
            name="email"
            placeholder="Email"
            example="tucorreo@email.com"
          />
          <InputBancoppel
            required
            type="text"
            className="input_formulario"
            secondary
            name="phone"
            placeholder="Teléfono"
            example="55 1234 5678"
          />
          <InputBancoppel
            required
            type="text"
            className="input_formulario"
            secondary
            name="job"
            placeholder="Puesto"
            example="Ejecutivo "
          />

          <SelectBancoppel>
            <option value="0">0</option>
            <option value="1">1</option>
          </SelectBancoppel>

          <BancoppelBtn amarillo>Enviar</BancoppelBtn>
        </form>
      </Container>
    </StyledContacto>
  );
}
