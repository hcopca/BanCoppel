import React, { Component } from "react";
import InputBancoppel from "./InputBancoppel";
import BancoppelBtn from "./BancoppelBtn";
import styled from "styled-components";

const StyledAcceso = styled.div`
  position: absolute;
  top: 120px;
  right: 0;
  border-radius: 24px;
  padding: 10px 15px;
  background: var(--white);
  width: 385px;

  box-shadow: 0px 10.8621px 10.8621px rgba(0, 0, 0, 0.1);

  z-index: 1000000;
/* 
  .type_user {
    display: flex;
    .user {
      flex: 1;
      padding: 10px;
      border-bottom: 2px var(--shadow-blue) solid;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      .bold_2 {
        text-align: center;
        color: var(--gray);
      }
    }

    .selected {
      border-bottom: 2px var(--yellow) solid;

      .bold_2 {
        transition: all 0.1s ease-out;
        text-align: center;
        color: var(--sky-blue);
      }
    }
  } */
`;

const StyledForm = styled.div`
  margin: 30px 0;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .form_item {
      margin-bottom: 20px;
      width: 100%;

      &:last-child {
        margin-bottom: 0px;
      }
      button {
        margin: auto;
        width: 120px;
        height: 50px;
      }
      p {
        color: var(--sky-blue);
        text-align: center;
      }
    }
    .forgot {
      font-family: Futura;
      font-size: 14px;
      line-height: 130%;
      text-decoration-line: underline;
      color: #338cbf;
      text-align: center;
      cursor: pointer;
    }

    .captcha {
      height: 60px;
      border: 1px solid red;
    }
  }
`;

export default class AccesoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selected: 1,
      Usuario: "",
      Contraseña: "",
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // componentWillUnmount() {
  //   document.body.style.overflow = "scroll";
  //   document.body.scroll = "yes";
  // }

  // componentDidMount() {
  //   document.body.style.overflow = "hidden";
  //   document.body.scroll = "no";
  // }

  onSubmit(e) {
    e.preventDefault();
  }

  render(){
    return (
      <StyledForm>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="form_item">
            <InputBancoppel
              type="text"
              label="Usuario"
              name="Usuario"
              id="Usuario"
              value={this.state.Usuario}
              onChange={(e) => this.onChange(e)}
              required
              
            />
          </div>
          <div className="form_item">
            <InputBancoppel
              type="password"
              label="Contraseña"
              name="Contraseña"
              id="Contraseña"
              value={this.state.Contraseña}
              onChange={(e) => this.onChange(e)}
              required
            
            />
          </div>

          {/* <div className="form_item captcha">
            <p>re captcha</p>
          </div> */}

          <div className="form_item">
            <BancoppelBtn amarillo type="submit">
              Entrar
            </BancoppelBtn>
          </div>
          <div className="form_item forgot">
            <p>¿Olvidaste tu contraseña?</p>
          </div>
          <div className="form_item forgot">
            <p>Regístrate</p>
          </div>
        </form>
      </StyledForm>
    );
  }

  // render() {
  //   return (
  //     <StyledAcceso>
  //       <div className="type_user">
  //         <div
  //           className={`user ${this.state.selected === 1 ? "selected" : ""}`}
  //           onClick={() => this.setState({ selected: 1 })}
  //         >
  //           <p className="bold_2">Empresas</p>
  //         </div>
  //         <div
  //           className={`user ${this.state.selected === 2 ? "selected" : ""}`}
  //           onClick={() => this.setState({ selected: 2 })}
  //         >
  //           <p className="bold_2">Pymes</p>
  //         </div>
  //       </div>
  //       {/* {this.renderForm()} */}
  //     </StyledAcceso>
  //   );
  // }
}
