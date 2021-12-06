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
      flex: 2;
    }
    .hero_container {
      .container {
        .children {
         .subchildren{
           h2{
            height: 70px;
            width: 420px;
           }
           .padresubtitle{
            .subtitle{
               width: 310px;
            }
           }
           img{
             width: 19px;
             margin-top: -150px;
            margin-left: 6px;
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
           width: 400px;
           }
           img{
             margin-top: -160px;
             width: 20px;
             height: 124px;
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
        margin-left: 100px;
        .children {
         .subchildren{
           h2{
           height: 90px;
           width: 500px;
           }
           img{
             margin-top: -175px;
             width: 23px;
             height: 140px;
             margin-left: 2px;
           }
         }
        }
      }
    }
  }
`;
const titleBanner = "LA CUENTA QUE TU EMPRESA NECESITA"
const subtitle = (<p>Obtén <span>mejores rendimientos</span> en tu saldo a la vista</p>)
class CuentaInversionEmpresarial extends Component {
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
           <meta
            name="description"
            content="Conoce más sobre los detalles, características y requisitos para tu cuenta de inversión empresarial BanCoppel."
            data-react-helmet="true"
          />
      </Helmet>
      <StyledInversionEmpresarial>
        <ResponsiveHeader>
          <div className="title">
            <h2>El dinero de tus</h2>
            <h2>
              trabajadores en
              <br />
              buenas manos
            </h2>
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
          subtitle={subtitle}
        />
        <ProductHeader>
          <h1>
            Cuenta <span>Inversión Empresarial</span>
          </h1>
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

export default CuentaInversionEmpresarial;

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
