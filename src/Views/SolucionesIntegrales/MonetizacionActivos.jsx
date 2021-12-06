import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
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
  ResponsiveHeader,
} from "../../Components";
import Hero_ from "../../Assets/Heros/hero_monetizacion.jpg";
import Hero_responsive from "../../Assets/Heros/hero_responsive_monetizacion.jpg";
import midImg from "../../Assets/Heros/hero_monetizacion_mid.jpg"
import HeroHome from "../../Assets/Heros/line1.svg";
import styled from "styled-components";

const StyledPruductHeader = styled.div`
  @media (min-width: 992px) {
    .header_body {
      flex: 2;
    }
  .hero_container{
    .container{
      .children{
        .subchildren{
          h2{
            width: 400px;
          }
          .padresubtitle{
            .subtitle{
              width: 350px;
            }
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
         h2{
          height: 70px;
         }
         img{
           margin-top: -159px;
           width: 20px;
           height: 123px;
           margin-left: 5px;
         }
       }
      }
    }
  }
}
@media (min-width: 1400px) {
  .hero_container {
    .container {
      .children {
       .subchildren{
         h2{
           width: 600px;
          height: 90px;
         }
         img{
           margin-top: -178px;
           width: 23px;
           height: 141px;
           margin-left: 2px;
         }
       }
      }
    }
  }
}
`;

const titleBanner = "CAPITAL DE TRABAJO PARA TU EMPRESA"
const subtitle = (<p><span>Te ayudamos</span> a optimizar tus activos</p>)
class MonetizacionActivos extends Component {
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
              <Requisitos
                push={{ data: "Contrato de Arrendamiento vigente.", idx: 1 }}
              />
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
                <>
                  Propietarios de un inmueble que <br /> arrienden a Grupo
                  Coppel.
                </>,
                "Personas Morales.",
              ]}
            />
          );
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
          Monetización de Activos: detalles y requisitos | BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Monetización de Activos: detalles y requisitos | BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/monetizacion-de-activos" />
          <meta 
          name="keywords"
          content="monetizacion, activos, bancoppel, financiamiento, credito, requisitos, credito empresarial" />
           <meta
            name="description"
            content="Conoce las características y requisitos de la Monetización de Activos y disfruta los beneficios de financiamiento de Banca Empresarial BanCoppel."
            data-react-helmet="true"
          />
      </Helmet>
     
      <StyledPruductHeader>
        <ResponsiveHeader>
          <div className="title">
            <h2>Arrendamiento</h2>

            <h2>a largo plazo</h2>
          </div>
          <div className="copy">
            <h4>
              El financiamiento que <br /> estabas buscando
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
          <StyledPruductHeader>
            <h1 className="header_product">
              Monetización <br /><span>de Activos</span>
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
      </StyledPruductHeader>
      </>
    );
  }
}

export default MonetizacionActivos;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_monetizacion.png").default,
      copy2:
        "Te brindamos liquidez sobre tu Activo Fijo.",
    },

    items: [
      {
        icon: require("../../Assets/credit_card_blue.svg").default,
        copy: "Otorga liquidez para capital de trabajo.",
      },
      {
        icon: require("../../Assets/mano_casa.svg").default,
        copy: "Genera valor al inmueble del arrendador.",
      },
      {
        icon: require("../../Assets/mano_casa.svg").default,
        copy: "Contrato de Arrendamiento vigente.",
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
        copy: "Capital de trabajo de largo plazo.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "Hasta el 85% del Valor Presente Neto de las rentas remanentes menos 3 meses.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Pago mensual de capital e intereses en fecha de pago de renta.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/porcentaje.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura y/o estructuración.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta el plazo del contrato de arrendamiento vigente menos 3 meses.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
];
