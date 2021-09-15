import React, { Component } from "react";
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
        margin-bottom: 15px;
      }

      button {
        width: 200px;
        height: 50px;
        margin-top: 20px;
      }
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    background-image: url(${({ img }) => img});
    .container {
      justify-content: flex-end;
      form {
        height: 696px;
      }
    }
  }
`;

class FormularioContacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      job: "",
      entity: "-1",
      product: "-1",
    };
  }

  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      phone: "",
      job: "",
      entity: "-1",
      product: "-1",
    });
  }

  render() {
    return (
      <StyledContacto img={Fondo} imgResponsive={Fondo_responsive}>
        <Container>
          <form onSubmit={(e) => this.onSubmit(e)}>
            <div className="headers">
              <h1>
                Estás muy cerca de <br />
                comenzar <span>tu historia con nosotros</span>
              </h1>
              <p>Deja tus datos y un asesor se pondrá en contacto contigo.</p>
            </div>
            <div className="input_formulario">
              <InputBancoppel
                type="text"
                required
                name="name"
                label="Nombre Completo"
                placeholder="Ej. Alexander Ramírez Rodriguez"
                value={this.state.name}
                onChange={this.onchange.bind(this)}
              />
            </div>
            <div className="input_formulario">
              <InputBancoppel
                type="email"
                required
                name="email"
                label="Email"
                placeholder="Ej. tucorreo@email.com"
                value={this.state.email}
                onChange={this.onchange.bind(this)}
              />
            </div>
            <div className="input_formulario">
              <InputBancoppel
                type="text"
                required
                name="phone"
                label="Teléfono"
                placeholder="Ej. 55 1234 5678"
                value={this.state.phone}
                onChange={this.onchange.bind(this)}
              />
            </div>
            <div className="input_formulario">
              <InputBancoppel
                type="text"
                required
                name="job"
                label="Puesto"
                placeholder="Ej. Ejecutivo"
                value={this.state.job}
                onChange={this.onchange.bind(this)}
              />
            </div>
            <div className="input_formulario">
              <SelectBancoppel
                required
                name="entity"
                label="Entidad"
                placeholder="Ej. Ciudad de México"
                value={this.state.entity}
                onChange={this.onchange.bind(this)}
              >
                <option value="0">COMEZON TENEDOR</option>
                <option value="1">1</option>
              </SelectBancoppel>
            </div>

            <div className="input_formulario">
              <SelectBancoppel
                required
                name="product"
                label="Selecciona el producto"
                placeholder="Selecciona el producto"
                value={this.state.product}
                onChange={this.onchange.bind(this)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </SelectBancoppel>
            </div>

            <BancoppelBtn type="submit" amarillo>
              Enviar
            </BancoppelBtn>
          </form>
        </Container>
      </StyledContacto>
    );
  }
}

export default FormularioContacto;
