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
import HeroHome from "../../Assets/proyectos_inversion.svg";
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

class ProyectosInversion extends Component {
  body(data) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return <Requisitos/>;
      case "Perfil del solicitante":
        return <PerfilSolicitante tercer_bullet={"Empresas Proveedoras de bienes y/o servicios a Grandes Empresas."}/>;
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
              Construimos <br/> soluciones a la         
              </h1>
           
              <h1>
              medida de tu <br/>  negocio
              </h1>
            </div>
            <div className="copy">
              <h4>
              El Financiamiento que necesitas <br /> para darle vida a tus proyectos
              </h4>
            </div>
            <BancoppelBtn amarillo>Regístrate</BancoppelBtn>
          </Container>
        </StyledHeader>
        <Hero btnCoppy="¡Solícitalo ahora!" banner={HeroHome} />
        <ProductHeader>
          <StyledPruductHeader>
            <h1 className="header_product">
            Proyectos <span>de inversión</span>
            </h1>
          </StyledPruductHeader>
        </ProductHeader>
        <Accordion items={SolucionesCreditoSections} body={this.body} />
        <Switcher items={SolucionesCreditoSections} body={this.body} />
        <ListaProductos />
      </>
    );
  }
}

export default ProyectosInversion;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/personas4.png").default,
      copy: "Producto crediticio que te ayuda a financiar las cuentas que tienes por cobrar a Grandes Empresas.",
    },

    items: [
      {
        icon: require("../../Assets/blue_acces_card.svg").default,
        copy: "Acceso a mayor plazo y monto.",
      },
      {
        icon: require("../../Assets/blue_up_coins.svg").default,
        copy: "Se usa un Vehículo de Propósito Específico sin afectar el balance de la empresa.",
      },
      {
        icon: require("../../Assets/hand_money_blue.svg").default,
        copy: "Financiamiento hecho de acuerdo a las necesidades de tu proyecto.",
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
        title: "MONTO DE LÍNEA",
        copy: "En función de las órdenes de compra estimados, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
        
      },
      {
        title: "FORMA DE PAGO",
        copy: "Gracia de capital de acuerdo a proyecto. Cobro de capital de acuerdo a la capacidad de flujo del proyecto, e interés mensuales. Balloon paymet.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: " ",
        copy: "Empresas Proveedoras de bienes y/o servicios a Grandes Empresas.",
        image: require("../../Assets/two_servers_and_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura y/o anualidad. Por estructuración.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 10 años.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
];
