import React, { Component } from "react";
import {
  Container,
  Hero,
  BancoppelBtn,
  Accordion,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  ListBullets,
  Switcher,
  ProductHeader,
  PerfilSolicitante
} from "../../Components";
import HeroHome from "../../Assets/Hero_Credito_Simple.svg";
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

class CreditoSimple extends Component {
  body(data) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return <ListBullets bullets={data.bullets} />;
      default:
        <CardBullets data={data} />;
    }
  }

  render() {
    return (
      <>
        <StyledHeader>
          <Container>
            <div className="title">
              <h1>UN CRÉDITO</h1>
              <h1>DE ACUERDO A</h1>
              <h1> TUS NECESIDADES</h1>
            </div>
            <div className="copy">
              <h4>
                Ajustamos el crédito a tu <br /> capacidad de pago
              </h4>
            </div>
            <BancoppelBtn amarillo>Haz clic ahora</BancoppelBtn>
          </Container>
        </StyledHeader>
        <Hero btnCoppy="Me interesa" banner={HeroHome} />
        <ProductHeader>
          <h1>
            CRÉDITO <span>SIMPLE</span>
          </h1>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body} />
        <Switcher items={CravSections} body={this.body} />
        <ListaProductos />

        <PerfilSolicitante/>
      </>
    );
  }
}

export default CreditoSimple;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons2.png").default,
      copy: "El financiamiento que necesitas para pontencializar tu empresa.",
    },

    items: [
      {
        icon: require("../../Assets/billetes_azul.svg").default,
        copy: "Optimización de capital de trabajo a largo plazo.",
      },
      {
        icon: require("../../Assets/hand_start.svg").default,
        copy: "Capital para proyectos productivos.",
      },
      {
        icon: require("../../Assets/hand_money_blue.svg").default,
        copy: "Compra de activo fijo.",
      },
      {
        icon: require("../../Assets/circle_blue_money.svg").default,
        copy: "Compra de inventarios.",
      },
    ],
  },
  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Capital de trabajo, equipamiento o compra de activo fijo.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función al monto de la inversión en capital de trabajo y proyectos de largo plazo, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "AMORTIZACIÓN",
        copy: "Pagos periódicos de capital e intereses.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TAZA",
        copy: "Variable.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta siete años.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
    bullets: [
      "Solicitud de crédito.",
      "Autorización para consulta historial crediticio.",
      "Estados Financieros: Dictaminados, internos y proyectados.",
      "Información legal del acreditado o del proyecto.",
      "Contacto con ejecutivo.",
    ],
  },
];
