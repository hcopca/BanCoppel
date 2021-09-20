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
  PerfilSolicitante,
  TeInteresa,
  // ListBullets,
} from "../../Components";
import Hero_ from "../../Assets/Heros/hero_factoraje.png";
import Hero_responsive from "../../Assets/Heros/hero_responsive_factoraje.png";
import HeroHome from "../../Assets/Heros/banner_factoraje.svg";

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
  .btn{
  width: 197px;
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
  constructor(props) {
    super(props);
    this.state = {};
  }
  body(data, mobile) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return (
          <>
            <Requisitos />
            {mobile ? <TeInteresa /> : null}
          </>
        );
      case "Perfil del solicitante":
        const item = (
          <>
            Personas Físicas con <br />
            Actividad Empresarial.
          </>
        );
        return <PerfilSolicitante bullets={["Personas Morales", item]} />;
      default:
        console.error("No hay solucion definida", data);
    }
  }
  isRequisitos(elem) {
    if (elem.section === "Requisitos") {
      this.setState({
        Requisitos: true,
      });
    } else {
      this.setState({
        Requisitos: false,
      });
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
            <BancoppelBtn amarillo>Me interesa</BancoppelBtn>
          </Container>
        </StyledHeader>
        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/"
        />
        <ProductHeader>
          <StyledPruductHeader>
            <h1 className="header_product">FACTORAJE</h1>
          </StyledPruductHeader>
        </ProductHeader>
        <Accordion items={SolucionesCreditoSections} body={this.body} />
        <Switcher
          items={SolucionesCreditoSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
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
      image: require("../../Assets/mano_factoraje.png").default,
      //Revisar el tamaño de card
      copy2:
        "Financiamiento a corto plazo para apoyar el crecimiento de tu Empresa, otorgándote  el pago anticipado de las cuentas por cobrar sobre las ventas a crédito.",
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
        copy: "Capital de trabajo.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función de su facturación y su capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Al vencimiento del documento cedido.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
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
        copy: "Plazo de disposición máxima a 180 días, plazo de la línea a 12 meses.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
];
