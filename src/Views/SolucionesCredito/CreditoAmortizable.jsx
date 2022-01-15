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
          .subchildren {
            h2 {
              width: 500px;
            }
            .padresubtitle {
              .subtitle {
                width: 297px;
                height: 70px;
              }
            }
            img {
              margin-top: -155px;
              width: 20px;
            }
          }
        }
      }
    }
    .header_body {
      flex: 3.4; //Tamaño de la linea azul con puntito en el titulo del header
    }
  }
  @media (min-width: 1200px) {
    .hero_container {
      .container {
        .children {
          .subchildren {
            .padresubtitle {
              .subtitle {
                width: 320px;
              }
            }
            img {
              height: 138px;
              margin-top: -170px;
              width: 23px;
              margin-left: 2px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .header_body {
      flex: 5; //
    }
    .hero_container {
      .container {
        .children {
          .subchildren {
            h2 {
              width: 430px;
              height: 160px;
            }
            img {
              margin-top: -251px;
              width: 36px;
              height: 219px;
              margin-left: -11px;
            }
          }
        }
      }
    }
  }
`;
const titleBanner = "EL RESPALDO QUE LE HACÍA FALTA A TU NEGOCIO";
const subtitle = (
  <p>
    Apoyamos tus <span>necesidades de tu capital</span> de trabajo
  </p>
);
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
            Crédito Cuenta Corriente: detalles y requisitos | BanCoppel.com
          </title>
          <meta
            name="title"
            content="Crédito Cuenta Corriente: detalles y requisitos | BanCoppel.com"
          />
          <link
            rel="canonical"
            href="https://www.bancoppel.com/bancoppel/credito-cuenta-corriente"
          />
          <meta name="keywords" content="" />
          <meta
            name="description"
            content="Conoce las características y requisitos de la Cuenta Corriente  y disfruta los beneficios de financiamiento de Banca Empresarial BanCoppel."
            data-react-helmet="true"
          />
        </Helmet>

        <StyledCreditoAmortizable>
          <ResponsiveHeader>
            <div className="title">
              <h2>EL RESPALDO QUE</h2>
              <h2>
                LE HACÍA FALTA <br />A TU NEGOCIO
              </h2>
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
            subtitle={subtitle}
          />

          <ProductHeader>
            <h1>
              CRÉDITO <span>CUENTA CORRIENTE</span>
            </h1>
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
      copy2: "Apoyamos tus necesidades de capital de trabajo.",
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
