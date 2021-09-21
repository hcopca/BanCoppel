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
import Hero_ from "../../Assets/Heros/hero_proyectos_inversion.png";
import Hero_responsive from "../../Assets/Heros/hero_responsive_proyectos_inversion.png";
import HeroHome from "../../Assets/Heros/banner_proyectos_inversion.svg";
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
    span {
      font-family: futura_bold;
    }
  }
  .btn {
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

class ProyectosInversion extends Component {
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
        return (
          <PerfilSolicitante
            bullets={[
              <>
                Personas Físicas con Actividad
                <br /> Empresarial.
              </>,
            ]}
          />
        );
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
                Construimos <br /> soluciones a la
              </h1>

              <h1>
                medida de tu <br /> negocio
              </h1>
            </div>
            <div className="copy">
              <h4>
                <span>El Financiamiento</span> que necesitas <br /> para darle vida a tus
                proyectos
              </h4>
            </div>
            <BancoppelBtn amarillo>Regístrate</BancoppelBtn>
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
            <h1 className="header_product">
              Proyectos <span>de inversión</span>
            </h1>
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

export default ProyectosInversion;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_proyectos_inversion.png").default,
      copy2:
        "Producto crediticio que te ayuda a financiar proyectos de inversión de largo plazo con fuente de pago propia.",
    },

    items: [
      {
        icon: require("../../Assets/blue_acces_card.svg").default,
        copy: "Acceso a mayor plazo y monto.",
      },
      {
        icon: require("../../Assets/blue_up_coins.svg").default,
        copy: "Se usa un vehículo de propósito específico sin afectar el balance de la empresa.",
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
        copy: "En función de las necesidades del proyecto.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Permite estructuración a medida del proyecto.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "SUJETOS DE CRÉDITO",
        copy: "Vehículos de propósito específico, personas morales.",
        image: require("../../Assets/two_servers_and_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable, permite escalonamiento por etapas.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura y/o estructuración.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 10 años o plazos menores con posibilidades de refinanciamiento.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
];
