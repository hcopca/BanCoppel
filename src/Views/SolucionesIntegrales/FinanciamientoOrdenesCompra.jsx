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
import Hero_ from "../../Assets/Heros/hero_financiamiento.jpg";
import Hero_responsive from "../../Assets/Heros/hero_responsive_financiamiento.jpg";
import HeroHome from "../../Assets/Heros/line1.svg";
import styled from "styled-components";
import Hero_mid from "../../Assets/Heros/img-financiamiento-mid.jpg";

const StyledFinanciamiento = styled.div`
  @media (min-width: 992px) {
    .header_body {
      flex: 7;
    }

  .hero_container{
    .container{
      .children{
        .subchildren{
          h2{
            font-size: 30px;
          }
          .padresubtitle{
            .subtitle{
              width: 330px;
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
         height: 80px;
          font-size: 34px;
          width: 530px;
         }
         img{
          margin-top: -180px;
           width: 25px;
         }
       }
      }
    }
  }
}
`;
const titleBanner = "DISEÑADO PARA RESOLVER TUS IMPREVISTOS"
const subtitle = (
  <p>No te quedes sin lo <span>{" "}indispensable</span> para tu <span>{" "}negocio</span></p>
)
class FinanciamientoOrdenesCompra extends Component {
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
          return (
            <PerfilSolicitante
              bullets={[
                "Personas Morales.",
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
          Financiamiento de ordenes de compra - requisitos | BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Financiamiento de ordenes de compra - requisitos | BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/financiamiento-ordenes-de-compra" />
          <meta 
          name="keywords"
          content="ordenes de compra, financiamiento,banca empresarial, bancoppel, credito,requisitos, negocio" />
           <meta
            name="description"
            content="Conoce los detalles y requisitos para Financiamiento de ordenes de compra y disfruta los beneficios de Banca empresarial BanCoppel."
            data-react-helmet="true"
          />
      </Helmet>
      <StyledFinanciamiento>
        <ResponsiveHeader>
          <div className="title">
            <h2>Diseñado para</h2>

            <h2>resolver tus imprevistos</h2>
          </div>
          <div className="copy">
            <h4>
              No te quedes sin lo <br /> indispensable para tu negocio
            </h4>
          </div>
        </ResponsiveHeader>
        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          midImg={Hero_mid}
          path="/"
          titleBanner={titleBanner}
          subtitle={subtitle}
        />
        <ProductHeader>
          <h1 className="header_product">
            Financiamiento de <span>Órdenes de compra</span>
          </h1>
        </ProductHeader>
        <Accordion items={SolucionesCreditoSections} body={this.body} />
        <Switcher
          items={SolucionesCreditoSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </StyledFinanciamiento>
      </>
    );
  }
}

export default FinanciamientoOrdenesCompra;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_financiamiento.png").default,
      copy2:
        "Financiamiento del ciclo operativo sobre tus pedidos confirmados.",
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
        copy: "Capital de trabajo.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función de históricos de ventas y pedidos confirmados.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: " Intereses mensuales y pago de capital al cobro del pedido y/o factura.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "MONTO A DISPONER",
        copy: "Hasta el 60% del monto del pedido confirmado. Hasta el 85% de la factura.",
        image: require("../../Assets/hands_circle_money.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/porcentaje.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Apertura y/o anualidad.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 360 días por cada disposición en función a la fecha de cobro del pedido.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
];
