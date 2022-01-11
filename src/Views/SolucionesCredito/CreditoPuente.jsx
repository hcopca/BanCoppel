import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Hero,
  Accordion,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Switcher,
  ProductHeader,
  ResponsiveHeader,
  Requisitos,
  TeInteresa,
} from "../../Components";
import Hero_ from "../../Assets/Heros/hero_puente.jpg";
import Hero_responsive from "../../Assets/Heros/hero_puente_responsive.jpg";
import HeroHome from "../../Assets/Heros/line1.svg";
import midImg from "../../Assets/Heros/hero_credito_puente_mid.jpg"
import styled from "styled-components";

const StyledCreditoPuente = styled.div`
  .btn {
    width: 197px;
  }
  @media (min-width: 992px) {
    .hero_container {
      .container {
        .children {
         .subchildren{
           h2{
             width: 550px;
           }
           img{
            margin-top: -155px;
             width: 19px;
             margin-left: 6px;
           }
           .padresubtitle{
            .subtitle{
             height: 55px;
            }
           }
         }
        }
      }
    }
    .header_body {
      flex: 3.2;
    }
  }
  @media (min-width: 1200px) {
    .hero_container {
      .container {
        .children {
         .subchildren{
         h2{
           height: 70px;
          }
          img{
             margin-top: -160px;
             width: 20px;
             height: 120px;
             margin-left: 5px;
             
           }
         }
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .header_body {
      flex: 2.58;
    }
    .hero_container {
      .container {
        .children {
        margin-left: -150px;
         .subchildren{
         h2{
           width: 700px;
           height: 95px;
          }
          img{
             margin-top: -185px;
             width: 24px;
             height: 145px;
             margin-left: 1px;
           }
         }
        }
      }
    }
  }
`;

const titleBanner = "PENSADO PARA CREAR PROYECTOS HABITACIONALES"
const subtitle = (
  <p><span>Construimos{" "}</span>contigo</p>
)
class CreditoPuente extends Component {
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
            <Requisitos type="solucionesCredito" />
            {mobile ? <TeInteresa /> : null}
          </>
        );
      default:
        <CardBullets data={data} />;
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
          Crédito Puente: detalles y requisitos | BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Crédito Puente: detalles y requisitos | BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/credito-puente" />
          <meta 
          name="keywords"
          content="credito puente, proyectos habitacionales, banca empresarial, bancoppel, credito,requisitos" />
           <meta
            name="description"
            content="Conoce los detalles y requisitos para tu Crédito Puente y disfruta los beneficios para proyectos habitaciones de Banca Empresarial BanCoppel."
            data-react-helmet="true"
          />
      </Helmet>
      <StyledCreditoPuente>
        <ResponsiveHeader>
          <div className="title">
            <h2>
              Pensado <br /> para crear
            </h2>
            <h2>
              proyectos
              <br />
              habitacionales
            </h2>
          </div>
          <div className="copy">
            <h4>
              <span>Construimos</span> contigo.
            </h4>
          </div>
        </ResponsiveHeader>

        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          midImg={midImg}
          banner={HeroHome}
          path="/"
          titleBanner={titleBanner}
          subtitle={subtitle}
        />
        <ProductHeader>
          <h1>
            CRÉDITO <span>PUENTE</span>
          </h1>
        </ProductHeader>
        <Accordion items={CreditoPuenteSections} body={this.body} />
        <Switcher
          items={CreditoPuenteSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </StyledCreditoPuente>
      </>
    );
  }
}

export default CreditoPuente;

const CreditoPuenteSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_credito_puente.png").default,
      copy2:
        "El impulso que necesitas para comenzar a construir.",
    },

    items: [
      {
        icon: require("../../Assets/stacked_blue_coins.svg").default,
        copy: "Disposiciones de capital conforme avance de obra.",
      },
      {
        icon: require("../../Assets/hand_coin_blue.svg").default,
        copy: "Paga capital hasta que inicia la comercialización.",
      },
      {
        icon: require("../../Assets/hands_exchanging_coin.svg").default,
        copy: "Sin penalización por pagos anticipados.",
      },
    ],
  },

  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Proyectos de edificación de vivienda.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función del valor de la edificación, costo de obra y aforo.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Amortizaciones mensuales de intereses y capital al vencimiento. Prepagos obligatorios por liberación de unidades.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/porcentaje.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura y/o anualidad y/o por ministración",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 4 años.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
