import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Hero,
  Accordion,
  Switcher,
  ProductHeader,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Requisitos,
  PerfilSolicitante,
  TeInteresa,
  ResponsiveHeader
  // ListBullets,
} from "../../Components";
import Hero_ from "../../Assets/Heros/hero_proyectos_inversion.jpg";
import Hero_responsive from "../../Assets/Heros/hero_responsive_proyectos_inversion.jpg";
import HeroHome from "../../Assets/Heros/line1.svg";
import styled from "styled-components";
import Hero_mid from "../../Assets/Heros/img-proyectos-mid.jpg";

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
    h2 {
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
const StyledProyectosInversion = styled.div`
@media (min-width: 992px) {
  .hero_container{
    .container{
      .children{
        .subchildren{
          h1{
            font-size: 29px;
            width: 440px;
            height: 90px;
          }
          img{
            width: 22px;
            margin-top: -170px;
            margin-left: 3px;
          }
        }
      }
    }
  }
}
  
@media (min-width: 1200px) {
  .hero_container {
    .container {
      .children {
       .subchildren{
         h1{
          height: 80px;
          font-size: 34px;
          width: 520px;
         }
         img{
          margin-top: -175px;
           width: 23px;
         }
       }
      }
    }
  }
}
`;
const titleBanner = "CONSTRUIMOS SOLUCIONES A LA MEDIDA DE TU NEGOCIO"
const subtitleBanner = "El financiamiento que necesitas para darle vida a tus proyectos"
class ProyectosInversion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  body(data, mobile) {
    if (data.section !== null) {
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
          return <PerfilSolicitante bullets={[
          <>Personas Morales.</>,
          <>“Vehículos de propósito específico (SPV)"</>
        ]} />;
        default:
          console.error("No hay solucion definida", data);
      }
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
       <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>
          Proyectos de inversión: detalles y requisitos | BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Proyectos de inversión: detalles y requisitos | BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/proyectos-de-inversion" />
          <meta 
          name="keywords"
          content="proyectos de inversion, financiamiento,banca empresarial, bancoppel, credito,requisitos, empresa" />
      </Helmet>
      <StyledProyectosInversion>
        <StyledHeader>
          <Container>
            <ResponsiveHeader>
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
                <span>El Financiamiento</span> que necesitas <br /> para darle
                vida a tus proyectos
              </h4>
            </div>
            </ResponsiveHeader>
          </Container>
        </StyledHeader>
        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          midImg={Hero_mid}
          path="/"
          titleBanner = {titleBanner}
          subtitleBanner = {subtitleBanner}
        />
        <ProductHeader>
          <StyledPruductHeader>
            <h2 className="header_product">
              Proyectos <span>de inversión</span>
            </h2>
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
        </StyledProyectosInversion>
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
        "Financiamiento de largo plazo para tus proyectos.",
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
        image: require("../../Assets/porcentaje.svg").default,
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