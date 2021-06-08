import React, { Component } from "react";
import {
  Container,
  Hero,
  BancoppelBtn,
  Accordion,
  Switcher,
  ProductHeader,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Requisitos,
  PerfilSolicitante
  // ListBullets,
} from "../../Components";
import HeroHome from "../../Assets/monetizacion_activos.svg";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 20px 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .title {
    margin-bottom: 20px;
    h1 {
      text-transform: uppercase;
      color: var(--sky-blue);
      line-height: 35px;
      &:first-child {
        color: var(--night-blue);
      }
    }
  }
  .copy {
    margin-bottom: 20px;
    h4 {
      color: var(--night-blue);
      font-family: futura_normal;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledPruductHeader = styled.div`
  .header_product {
    text-align: center;
    color: var(--night-blue);
    span {
      color: var(--sky-blue);
    }
  }
`;

class MonetizacionActivos extends Component {
  body(data) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return <Requisitos/>;
      case "Perfil del solicitante":
        return <PerfilSolicitante/>;
      default:
        console.error("No hay solucion definida", data);
    }
  }

  render() {
    return (
      <>
        <StyledHeader>
          <Container>
            <div className="title">
              <h1>
                Arrendamiento 
              </h1>
           
              <h1>
                a largo plazo
              </h1>
            </div>
            <div className="copy">
              <h4>
              El financiamiento que <br />  estabas buscando
              </h4>
            </div>
            <BancoppelBtn amarillo>Regístrate</BancoppelBtn>
          </Container>
        </StyledHeader>
        <Hero btnCoppy="Solícitalo aquí" banner={HeroHome} />
        <ProductHeader>
          <StyledPruductHeader>
            <h1 className="header_product">Monetización <span>de Activos</span></h1>
          </StyledPruductHeader>
        </ProductHeader>
        <Accordion items={SolucionesCreditoSections} body={this.body} />
        <Switcher items={SolucionesCreditoSections} body={this.body} />
        <ListaProductos />
      </>
    );
  }
}

export default MonetizacionActivos;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons3.png").default,
      copy: "Servicio que brinda la facilidad de transferir de forma masiva o individual el dinero que quieras cuando quieras.",
    },

    items: [
      {
        icon: require("../../Assets/credit_card_blue.svg").default,
        copy: "Otorga liquidez para capital de trabajo.",
      },
      {
        icon: require("../../Assets/hand_house_blue.svg").default,
        copy: "Eficiencia en el manejo de tus recursos.",
      },
      
    ],
  },
  {
    section: "Requisitos",
   
  },
  {
    section: "Perfil del solicitante",
  },
  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Capital de trabajo de largo plazo.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "Lo que resulte menor entre el 85% del valor presente de las rentas futuras del contrato de arrendamiento vigente o 2 millones de UDI’s.",
        image: require("../../Assets/hand_coins.svg").default,
        
      },
      {
        title: "FORMA DE PAGO",
        copy: "Pago mensual de capital e intereses.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TAZA",
        copy: "Variable..",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 180 días.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
];
