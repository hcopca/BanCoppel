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
import Hero_ from "../../Assets/Heros/hero_corriente.jpg";
import Hero_responsive from "../../Assets/Heros/hero_corriente_responsive.jpg";
import HeroHome from "../../Assets/Heros/line1.svg";
import Hero_mid from "../../Assets/Heros/img-cuenta-corriente-amortizable-mid.jpg";

import styled from "styled-components";

const StyledCreditoAmortizable = styled.div`
  .btn {
    width: 197px;
  }
  @media (min-width: 992px) {
    .hero_container {
      .container {
        .children {
         .subchildren{
           h1{
            font-size: 28px;
            width: 300px;
            height: 90px;
           }
           .subtitle{
             p{
               width: 260px;
             }
           }
           img{
            margin-top: -160px;
             width: 20px;
             
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
           height: 100px;
            font-size: 30px;
           }
           img{
            margin-top: -190px;
             width: 25px;
           }
         }
        }
      }
    }
  }
`;
const titleBanner = "EL RESPALDO QUE LE HACÍA FALTA A TU NEGOCIO."
const subtitleBanner = " Apoyamos las necesidades de tu capital de trabajo."
class CreditoAmortizable extends Component {
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
          Cuenta corriente amortizable: detalles y requisitos | BanCoppel.com
          </title>
          <meta 
          name="title" 
          content=" Cuenta corriente amortizable: detalles y requisitos | BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/credito-amortizable" />
          <meta 
          name="keywords"
          content="credito cuenta corriente, amortizable, banca empresarial, bancoppel, credito a corto plazo,requisitos," />

      </Helmet>

      <StyledCreditoAmortizable>
        <ResponsiveHeader>
          <div className="title">
            <h1>EL RESPALDO QUE</h1>
            <h1>
              LE HACÍA FALTA <br />A TU NEGOCIO
            </h1>
          </div>
          <div className="copy">
            <h4>
              Apoyamos tus necesidades de <br /> tu capital de trabajo
            </h4>
          </div>
        </ResponsiveHeader>

        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/"
          midImg={Hero_mid}
          titleBanner={titleBanner}
          subtitleBanner={subtitleBanner}
        />

        <ProductHeader>
          <h2>
            CRÉDITO{" "}
            <span>
              CUENTA <br /> CORRIENTE
            </span>
          </h2>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body} />
        <Switcher
          items={CravSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </StyledCreditoAmortizable>
      </>
    );
  }
}

export default CreditoAmortizable;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_cuenta_amortizable.png").default,
      copy2:
        "Apoyamos las necesidades de tu capital de trabajo.",
    },

    items: [
      {
        icon: require("../../Assets/billetes_azul.svg").default,
        copy: "Optimización de flujo de capital de trabajo en corto plazo y largo plazo.",
      },
      {
        icon: require("../../Assets/hand_start.svg").default,
        copy: "Capital para apoyar el proceso productivo.",
      },
    ],
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
        copy: "En función a la necesidad de capital de trabajo y la capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Pagos de intereses mensuales y capital al vencimiento de la disposición.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/porcentaje.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura y/o anualidad.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 36 meses.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
