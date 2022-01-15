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
  TeInteresa,
} from "../Components";
import Hero_ from "../Assets/Heros/hero_empresanet.jpg";
import Hero_responsive from "../Assets/Heros/hero_responsive_empresanet.jpg";
import midImg from "../Assets/Heros/hero_empresanet_mid.jpg";
import HeroHome from "../Assets/Heros/line1.svg";
import styled from "styled-components";
const StyledEmpresaNet = styled.div`
  .btn {
    width: 197px;
  }
  @media (min-width: 992px) {
    .header_body {
      flex: 4;
    }
    .hero_container {
      .container {
        .children {
          .subchildren {
            h2 {
              height: 70px;
              width: 450px;
            }
            .padresubtitle {
              .subtitle {
                height: 60px;
                width: 260px;
                padding-top: 5px;
              }
            }
            img {
              width: 19px;
              height: 114px;
              margin-top: -157px;
              margin-left: 6px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .header_body {
      flex: 2.2;
    }
    .hero_container {
      .container {
        margin-left: 90px;
        .children {
          .subchildren {
            h2 {
              height: 90px;
              width: 650px;
            }
            .padresubtitle {
              .subtitle {
                height: 69px;
                width: 378px;
              }
            }
            img {
              margin-top: -180px;
              height: 145px;
              width: 24px;
              margin-left: 1px;
            }
          }
        }
      }
    }
  }
`;

const titleBanner = "LOS BENEFICIOS DE LA BANCA SIN SALIR DE CASA";
const subtitle = (
  <p>
    Maneja <span>tus cuentas</span> desde la comodidad de <span>tu hogar</span>
  </p>
);
class EmpresaNet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  body(data, mobile) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
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
          <title>EmpresaNet: banca por internet | BanCoppel.com</title>
          <meta
            name="title"
            content="EmpresaNet: banca por internet | BanCoppel.com"
          />
          <link
            rel="canonical"
            href="https://www.bancoppel.com/bancoppel/empresanet"
          />
          <meta
            name="keywords"
            content="banca empresarial, bancoppel, banco, cuentas, empresa,operaciones financieras,  negocio,  administrar,"
          />
          <meta
            name="description"
            content="Conoce todas las operaciones que puedes realizar desde EmpresaNet para tu negocio."
            data-react-helmet="true"
          />
        </Helmet>
        <StyledEmpresaNet>
          <ResponsiveHeader>
            <div className="title">
              <h2>Los beneficios</h2>
              <h2>
                de la Banca sin
                <br />
                salir de casa
              </h2>
            </div>
            <div className="copy">
              <h4>
                Maneja <span>tus cuentas</span> desde la comodidad de{" "}
                <span>tu hogar</span>
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
              Empresa<span>Net</span>
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
        </StyledEmpresaNet>
      </>
    );
  }
}

export default EmpresaNet;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../Assets/mano_empresanet.png").default,
      copy2:
        "Servicio que controla, administra y realiza operaciones financieras de tus cuentas de forma segura.",
    },

    items: [
      {
        icon: require("../Assets/hoja_empresanet.svg").default,
        copy: "Administra tu cuenta de negocios.",
      },
      {
        icon: require("../Assets/pulgar_empresanet.svg").default,
        copy: "Operaciones rápidas y seguras.",
      },
      {
        icon: require("../Assets/clock_empresanet.svg").default,
        copy: "Programa tus operaciones o realízalas en línea.",
      },
      {
        icon: require("../Assets/ppl_empresanet.svg").default,
        copy: "Asigna hasta 8 operadores para la administración de tu negocio.",
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
