import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  ResponsiveHeader,
  Hero,
  Accordion,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Requisitos,
  Switcher,
  ProductHeader,
  TeInteresa,
} from "../Components";
import Hero_ from "../Assets/Heros/hero_nomina.jpg";
import Hero_responsive from "../Assets/Heros/hero_responsive_nomina.jpg";
import midImg from "../Assets/Heros/hero_nomina_mid.jpg"
import HeroHome from "../Assets/Heros/line1.svg";
import styled from "styled-components";
const StyledNominasBanCoppel = styled.div`
  .btn {
    width: 197px;
  }
  @media (min-width: 992px) {
    .header_body {
      flex: 3.3;
    }
    .hero_container {
      .container {
        .children {
         .subchildren{
           h2{
            height: 100px;
            width: 330px;
           }
           .padresubtitle{
            .subtitle{
               height: 55px;
            }
           }
           img{
             width: 25px;
             height: 151px;
             margin-top: -192px;
             margin-left: 0px;
           }
         }
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .header_body {
      flex: 3.5;
    }
    .hero_container {
      .container {
        .children {
         .subchildren{
           h2{
           height: 140px;
           width: 500px;
           }
           img{
             margin-top: -230px;
             height: 189px;
             width: 31px;
             margin-left: -6px;
           }
         }
        }
      }
    }
  }
`;
const titleBanner = "EL DINERO DE TUS TRABAJADORES EN BUENAS MANOS"
const subtitle = (<p><span>Transfiere tus fondos{" "}</span> cuando quieras</p>)
class NominasBanCoppel extends Component {
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
            <Requisitos type="secondaryBulls" />
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
          Nómina BanCoppel: detalles y requisitos | BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Nómina BanCoppel: detalles y requisitos | BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/nomina-bancoppel" />
          <meta 
          name="keywords"
          content="nomina, bancoppel, requisitos, beneficios, transferencias bancarias" />
           <meta name="description" 
           content="Conoce las características y requisitos de Nómina BanCoppel y disfruta los beneficios de financiamiento de Banca Empresarial BanCoppel." 
           />
      </Helmet>
      
      <StyledNominasBanCoppel>
        <ResponsiveHeader>
          <div className="title">
            <h2>EL DINERO DE TUS</h2>
            <h2>
              TRABAJADORES EN
              <br />
              BUENAS MANOS
            </h2>
          </div>
          <div className="copy">
            <h4>
              <span>Transfiere tus fondos</span> cuando quieras
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
            NÓMINA <span>BANCOPPEL</span>
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
      </StyledNominasBanCoppel>
      </>
    );
  }
}

export default NominasBanCoppel;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../Assets/mano_nomina.png").default,
      copy2:
        "Servicio que permite transferir de forma masiva o individual tu dinero cuando quieras.",
    },

    items: [
      {
        icon: require("../Assets/blue_watch.svg").default,
        copy: "Ahorra tiempo al momento de realizar los pagos.",
      },
      {
        icon: require("../Assets/blue_laptop.svg").default,
        copy: "Realiza dispersiones en línea o mediante operaciones programadas.",
      },
      {
        icon: require("../Assets/blue_person.svg").default,
        copy: "Apertura las cuentas de tus trabajadores de forma individual o masiva.",
      },
      {
        icon: require("../Assets/blue_phone.svg").default,
        copy: "Reportes de todas las operaciones realizadas a tus trabajadores.",
      },
      {
        icon: require("../Assets/facilidad_pago.svg").default,
        copy: "Facilidad en el pago de las prestaciones laborales de tus trabajadores.",
      },
      {
        icon: require("../Assets/blue_monitor.svg").default,
        copy: "Seguridad, al evitar el manejo de efectivo y cheques.",
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
