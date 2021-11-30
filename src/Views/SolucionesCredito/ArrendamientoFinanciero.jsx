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
import Hero_ from "../../Assets/Heros/hero_arrendamiento.jpg";
import Hero_responsive from "../../Assets/Heros/hero_arrendamiento_responsive.jpg";
import HeroHome from "../../Assets/Heros/line1.svg";
import midImg from "../../Assets/Heros/hero_arrendamiento_mid.jpg"
import styled from "styled-components";
const StyledArrendamientoFinanciero = styled.div`
  .btn {
    width: 197px;
  }

  @media (min-width: 992px) {
    .header_body {
      flex: 3;
    }
  
    .hero_container {
      .container {
        .children {
         .subchildren{
           h2{
             width: 405px;
             height: 85px;
            font-size: 26px;
           }
           img{
             width: 23px;
             margin-top: -175px;
             margin-left: 0px;
           }
         }
        }
      }
    }
    .header_body {
      flex: 3;
    }
  }
  @media (min-width: 1200px) {
    .hero_container {
      .container {
        .children {
         .subchildren{
           h2{
           height: 110px;
            font-size: 34px;
            width: 530px;
           }
           img{
            margin-top: -200px;
             width: 27px;
             margin-left: -2px;
           }
         }
        }
      }
    }
  }
`;
const titleBanner = "FINANCIAMIENTO DE ACTIVOS FIJOS PENSADOS PARA TU EMPRESA"
const subtitle = (
  <p>Te damos las herramientas para <br /> <span>{" "}crecer tu negocio</span></p>
)
class ArrendamientoFinanciero extends Component {
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
            <Requisitos
              type="solucionesCredito"
              push={{ data: "Especificaciones o factura del Activo.", idx: 1 }}
            />
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
          Arrendamiento financiero: detalles y requisitos| BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Arrendamiento financiero: detalles y requisitos| BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/arrendamiento-financiero" />
          <meta 
          name="keywords"
          content="arrendamiento financiero, activo fijo, banca empresarial, bancoppel, credito,requisitos, empresa, negocio," />
          <meta
            name="description"
            content="Conoce los detalles y requisitos de arrendamiento financiero y disfruta los beneficios de Banca empresarial BanCoppel"
            data-react-helmet="true"
          />
      </Helmet>
      
      <StyledArrendamientoFinanciero>
        <ResponsiveHeader>
          <div className="title">
            <h2>
              Financiamiento <br /> de Activo Fijo
            </h2>
            <h2>
              pensados para
              <br />
              tu empresa
            </h2>
          </div>
          <div className="copy">
            <h4>
              Te damos las herrramientas para <span>crecer tu negocio.</span>
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
            Arrendamiento <span>financiero</span>
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
      </StyledArrendamientoFinanciero>
      </>
    );
  }
}

export default ArrendamientoFinanciero;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_arrendamiento.png").default,
      copy2:
        "Producto de crédito que ayuda a mantener tus activos fijos en uso por una renta mensual.",
    },

    items: [
      {
        icon: require("../../Assets/hand_house_blue.svg").default,
        copy: "Deducción de los intereses de las rentas.",
      },
      {
        icon: require("../../Assets/Financial_Document.svg").default,
        copy: "Sin enganche en la adquisición del activo.",
      },
      {
        icon: require("../../Assets/tickets.svg").default,
        copy: "Adquisición de activos fijos con financiamiento hasta del 100%.",
      },
    ],
  },

  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Adquisición de maquinaria y equipo, ya sea nuevo o usado.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función al valor de los bienes a adquirir en el arrendamiento, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Rentas mensuales compuestas por capital, intereses e IVA.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable y/o fija.",
        image: require("../../Assets/porcentaje.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Apertura y/o anualidad.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 5 años.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
