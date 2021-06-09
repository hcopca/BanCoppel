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
import HeroHome from "../../Assets/FinanciamientoOrdenesCompra.svg";
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

class FinanciamientoOrdenesCompra extends Component {
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
              Diseñado para               
              </h1>
             
           
              <h1>
              resolver tus imprevistos              
              </h1>
            </div>
            <div className="copy">
              <h4>
              No te quedes sin lo <br /> indispensable para tu negocio
              </h4>
            </div>
            <BancoppelBtn amarillo>Regístrate</BancoppelBtn>
          </Container>
        </StyledHeader>
        <Hero btnCoppy="¡Pídelo ya!" banner={HeroHome} />
        <ProductHeader>
          <StyledPruductHeader>
            <h1 className="header_product">
                Financiamiento de <span>Órdenes de compra</span>
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

export default FinanciamientoOrdenesCompra;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons3.png").default,
      copy: "Producto crediticio que te ayuda a financiar las cuentas que tienes por cobrar a Grandes Empresas.",
    },

    items: [
      {
        icon: require("../../Assets/laptop_calendar_blue.svg").default,
        copy: "Financiar el ciclo operativo de la empresa a partir de la fecha en que se confirma un pedido.",
      },
      {
        icon: require("../../Assets/billetes_blue_2.svg").default,
        copy: "Los plazos de pago se ajustan a las fechas de cobro de cada pedido.",
      },
      {
        icon: require("../../Assets/lupa_blue.svg").default,
        copy: "Revisiones periódicas al monto de la línea de crédito.",
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
        copy: "Financiamiento de cuentas por cobrar con Grandes Compradores.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función de las órdenes de compra estimados, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
        
      },
      {
        title: "FORMA DE PAGO",
        copy: "Pago mensual de capital e intereses.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "MONTO A DISPONER",
        copy: "Hasta 60% del monto de cada pedido confirmado. Hasta 85% de la factura.",
        image: require("../../Assets/hands_circle_money.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Apertura y/o anualidad.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 12 meses por cada disposición, con base en la fecha de cobro de cada pedido.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
];
