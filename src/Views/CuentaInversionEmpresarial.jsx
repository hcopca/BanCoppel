import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Hero,
  Accordion,
  ListaProductos,
  CardBullets,
  Switcher,
  ProductHeader,
  ResponsiveHeader,
  Requisitos,
  SwitcherBullets,
  TeInteresa,
  Consulta,
  ListCardsSecondary,
} from "../Components";
import Hero_ from "../Assets/Heros/hero_cuenta_empresarial.jpg";
import Hero_responsive from "../Assets/Heros/hero_responsive_empresarial.jpg";
import HeroHome from "../Assets/Heros/line1.svg";
import styled from "styled-components";
import Hero_mid from "../Assets/Heros/img-cuenta-inversion-mid.jpg";

const StyledInversionEmpresarial = styled.div`
  @media (min-width: 992px) {
    .header_body {
      flex: 5;
    }
    .hero_container {
      .container {
        .children {
         .subchildren{
           h1{
            height: 70px;
            width: 320px;
            font-size: 26px;
           }
           .subtitle{
             p{
               height: 55px;
               width: 280px;
             }
           }
           img{
             width: 20px;
             margin-top: -160px;

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
           height: 90px;
           width: 400px;
            font-size: 36px;
           }
           img{
            margin-top: -190px;
             width: 25px;
             margin-left: 0px;
           }
         }
        }
      }
    }
  }
`;
const titleBanner = "LA CUENTA QUE TU EMPRESA NECESITA"
const subtitleBanner = "Obtén mejores rendimientos en tu saldo a la vista"
class EmpresaNet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        section: "Beneficios",
      },
    };
  }

  body(data, mobile) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Requisitos":
        return (
          <>
            <Requisitos type="inversionEmpresarial" />
            {mobile ? <TeInteresa /> : null}
          </>
        );
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Tips de seguridad":
        return <SwitcherBullets data={data} />;
      default:
        <CardBullets data={data} />;
    }
  }
  isRequisitos(elem) {
    if (elem.section === "Requisitos") {
      this.setState({
        Requisitos: true,
        view: elem,
      });
    } else {
      this.setState({
        Requisitos: false,
        view: elem,
      });
    }
  }

  render() {
    return (
      <>
       <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>
          Cuenta inversión empresarial: detalles y requisitos | BanCoppel.com
          </title>
          <meta 
          name="title" 
          content="Cuenta inversión empresarial: detalles y requisitos | BanCoppel.com" />
          <link rel="canonical" href="https://www.bancoppel.com/empresas/cuenta-inversion-empresarial" />
          <meta 
          name="keywords"
          content="banca empresarial, bancoppel, banco, empresa,cuenta de inversion, rendimiento, caracteristicas, requisitos, negocio," />

      </Helmet>
      <StyledInversionEmpresarial>
        <ResponsiveHeader>
          <div className="title">
            <h1>El dinero de tus</h1>
            <h1>
              trabajadores en
              <br />
              buenas manos
            </h1>
          </div>
          <div className="copy">
            <h4>La cuenta que tu empresa necesita</h4>
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
          subtitleBanner={subtitleBanner}
        />
        <ProductHeader>
          <h2>
            Cuenta <span>Inversión Empresarial</span>
          </h2>
        </ProductHeader>
        <Accordion items={InversionEmpresarialSections} body={this.body} />
        <Switcher
          items={InversionEmpresarialSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />

        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
        {this.state.view.section === "Beneficios" ? <Consulta /> : null}
      </StyledInversionEmpresarial>
      </>
    );
  }
}

export default EmpresaNet;

const InversionEmpresarialSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../Assets/mano_cuenta_empresarial.png").default,
      copy2:
        "La mejor opción para optimizar tus recursos de la manera mas sencilla.",
    },

    items: [
      {
        icon: require("../Assets/flecha_arriba.svg").default,
        copy: "Obtén excelentes rendimientos sobre tu saldo a la vista.",
      },
      {
        icon: require("../Assets/clock.svg").default,
        copy: "Sin horarios o plazos forzosos.",
      },
      {
        icon: require("../Assets/bill.svg").default,
        copy: "Sin costo de contratación.",
      },
    ],
  },

  {
    section: "Características",
    cards: [
      {
        copy: "Disponilidad de tu saldo las 24 horas del día.",
        image: require("../Assets/white_watch.svg").default,
      },
      {
        copy: "Obtén hasta el 100% de CETES.",
        image: require("../Assets/white_plant.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
