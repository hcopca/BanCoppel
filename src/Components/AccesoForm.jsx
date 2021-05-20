import React, { Component } from "react";
import InputBancoppel from "./InputBancoppel";
import BancoppelBtn from "./BancoppelBtn";
import styled from "styled-components";

const StyledAcceso = styled.div`
  position: absolute;
  top: calc(100% + 67px);

  border-radius: 24px;
  padding: 10px 15px;
  background: var(--white);
  width: 385px;
  left: -220%;

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
      /* &:hover .bold_2 {
        transform: scale(1.1);
      } */
    }

    .selected {
      border-bottom: 2px var(--yellow) solid;

      .bold_2 {
        transition: all 0.1s ease-out;
        text-align: center;
        color: var(--sky-blue);
      }
    }
  }

  @media (min-width: 992px) {
    left: -155%;
  }

  @media (min-width: 1200px) {
    left: -110%;
  }
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
      }
      p {
        color: var(--sky-blue);
        text-align: center;
      }
    }

    .captcha {
      height: 60px;
    }
  }
`;

export default class AccesoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      RFC: "",
      Contraseña: "",
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  componentWillUnmount() {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
  }

  renderForm() {
    return (
      <StyledForm>
        <form onSubmit={() => console.log("amonos")}>
          <div className="form_item">
            <InputBancoppel
              type="text"
              placeholder="RFC"
              name="RFC"
              id="RFC"
              value={this.state.RFC}
              onChange={(e) => this.onChange(e)}
              required
            />
          </div>
          <div className="form_item">
            <InputBancoppel
              type="password"
              placeholder="Contraseña"
              name="Contraseña"
              id="Contraseña"
              value={this.state.Contraseña}
              onChange={(e) => this.onChange(e)}
              required
            />
          </div>

          <div className="form_item captcha">
            <p>re captcha</p>
          </div>

          <div className="form_item">
            <BancoppelBtn secundario type="submit">
              Entrar
            </BancoppelBtn>
          </div>
          <div className="form_item">
            <p>¿Olvidaste tu contraseña?</p>
          </div>
        </form>
      </StyledForm>
    );
  }

  render() {
    // console.log(this.state);
    return (
      <StyledAcceso>
        <div className="type_user">
          <div
            className={`user ${this.state.selected === 1 ? "selected" : ""}`}
            onClick={() => this.setState({ selected: 1 })}
          >
            <p className="bold_2">Banca empresarial</p>
          </div>
          <div
            className={`user ${this.state.selected === 2 ? "selected" : ""}`}
            onClick={() => this.setState({ selected: 2 })}
          >
            <p className="bold_2">Portal Pyme</p>
          </div>
        </div>
        {this.renderForm()}
      </StyledAcceso>
    );
  }
}
