import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import {
  Container,
  InputBancoppel,
  BancoppelBtn,
  SelectBancoppel,
} from "../Components";
import Fondo from "../Assets/fondo_contacto.png";
import Fondo_responsive from "../Assets/formulario_fondo_responsive.png";
import Catalogo from "../Catalogo_Productos";

const StyledContacto = styled.div`
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
      max-width: 436px;
      height: 100%;
      /* max-height: 634px; */
      background: #ffffff;
      box-shadow: 0px 10.8621px 10.8621px rgba(0, 0, 0, 0.1);
      border-radius: 8.68966px;
      padding: 30px 30px 30px 40px;

      .headers {
        margin-bottom: 25px;
        text-align: center;
        h2 {
          margin-bottom: 8px;
          font-family: futura_heavy;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 110%;
          color: #002a61;
          span {
            color: var(--blue);
          }
        }
        p {
          font-size: 14px;
          line-height: 110%;
          font-family: futura_book;
          color: #636363;
        }
      }
      .productos {
        margin-top: 25px;
      }
      .input_formulario {
        margin-bottom: 15px;
      }
      .boton{
        display: flex;
        justify-content: center;
        align-items: center;
          button {
          width: 156px;
          height: 50px;
          margin-top: 25px;
          }
      }
    

      .link_terminos {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        font-family: futura_book;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 110%;
        a {
          text-decoration: underline;
          color: #225aa7;
        }
        color: #636363;
      }
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    background-image: url(${({ img }) => img});
    .container {
      justify-content: flex-end;
      form{
        .headers{
          h2{
            font-size: 24px;
          }
          p{
            font-size: 14px;
          }
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .container {
      form{
        max-width: 482px;
        padding: 30px 30px 30px 66px;
        .headers{
          h2{
            margin: 0px;
            margin-bottom: 9px;
            font-size: 28px;
          }
          p{
            font-size: 16px;
          }
        }
        .link_terminos{
          font-size: 16px;
        }
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
      <>
      <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>
          Contacto - Portal Empresas| BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Contacto - Portal Empresas| BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/contacto" />
          <meta 
          name="keywords"
          content="contacto, empresas, contactanos, asesor, portal empresas" />
          <meta name="description" 
           content="Contacta a un asesor en línea para resolver cualquier duda sobre la Banca Empresarial BanCoppel." 
           />
      </Helmet>
      <StyledContacto img={Fondo} imgResponsive={Fondo_responsive}>
        <Container>
          <form onSubmit={(e) => this.onSubmit(e)}>
            <div className="headers">
              <h2>
                Estás muy cerca de <br />
                comenzar{" "}
                <span>
                  tu historia <br /> con nosotros
                </span>
              </h2>
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
            <div className="input_formulario ">
              <SelectBancoppel
                required
                name="entity"
                label="Entidad"
                placeholder="Ej. Ciudad de México"
                value={this.state.entity}
                onChange={this.onchange.bind(this)}
                secondary
              >
                <option value="0">PRUEBA</option>
                <option value="1">1</option>
              </SelectBancoppel>
            </div>

            <div className="input_formulario productos">
              <SelectBancoppel
                required
                name="product"
                label="Selecciona el producto"
                placeholder="Selecciona el producto"
                value={this.state.product}
                onChange={this.onchange.bind(this)}
              >
                {Catalogo.map((ele, idx) => (
                  <option value={ele.name} key={idx}>
                    {ele.name}
                  </option>
                ))}
              </SelectBancoppel>
            </div>
            
            <div className="boton">
              <BancoppelBtn type="submit" amarillo>
                Enviar
              </BancoppelBtn>
            </div>
            <pre><p className="link_terminos">
              Consulta el aviso de privacidad, <a href="/">aquí</a>
            </p></pre>
          </form>
        </Container>
      </StyledContacto>
      </>
    );
  }
}

export default FormularioContacto;
