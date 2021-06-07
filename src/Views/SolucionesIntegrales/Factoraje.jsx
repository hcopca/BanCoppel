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
import HeroHome from "../../Assets/factoreje_home.svg.svg";
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

class SolucionesCredito extends Component {
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
                Producto de <br />
                financiamiento
              </h1>
              <h1>
                pensado para
                <br /> hacer crecer a<br />
                tu empresa
              </h1>
            </div>
            <div className="copy">
              <h4>
                El manejo de tus cobros está <br /> en buenas manos
              </h4>
            </div>
            <BancoppelBtn amarillo>Regístrate</BancoppelBtn>
          </Container>
        </StyledHeader>
        <Hero btnCoppy="Regístrate" banner={HeroHome} />
        <ProductHeader>
          <StyledPruductHeader>
            <h1 className="header_product">FACTORAJE</h1>
          </StyledPruductHeader>
        </ProductHeader>
        <Accordion items={SolucionesCreditoSections} body={this.body} />
        <Switcher items={SolucionesCreditoSections} body={this.body} />
        <ListaProductos />
      </>
    );
  }
}

export default SolucionesCredito;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons2.png").default,
      copy: "Financiamiento a corto plazo para apoyar el crecimiento de tu Empresa, otorgándote  el pago anticipado de las cuentas por cobrar sobre las ventas a crédito.",
    },

    items: [
      {
        icon: require("../../Assets/portfolios_blue.svg").default,
        copy: "Convierte tus ventas a crédito en ventas a contado.",
      },
      {
        icon: require("../../Assets/like_plant.svg").default,
        copy: "Eficiencia en el manejo de tus recursos.",
      },
      {
        icon: require("../../Assets/gear_coin_white.svg").default,
        copy: "Obtén capital de trabajo.",
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
        copy: "Capital de trabajo de corto plazo y/o para cubrir eventualidades de tesorería.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función a las necesidades del capital de trabajo a corto, largo plazo, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Al vencimiento de la factura.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TAZA",
        copy: "Descuento.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Apertura y/o anualidad, Operación.",
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
