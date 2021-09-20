import React, { Component } from "react";
import {
  Hero,
  BancoppelBtn,
  Accordion,
  ListaProductos,
  CardBullets,
  Switcher,
  ProductHeader,
  ResponsiveHeader,
  Requisitos,
  ListBullets,
  TeInteresa,
} from "../Components";
import Hero_ from "../Assets/Heros/hero_empresanet.png";
import Hero_responsive from "../Assets/Heros/hero_responsive_empresanet.png";
import HeroHome from "../Assets/Heros/banner_empresanet.svg";
import styled from "styled-components";
const StyledEmpresaNet = styled.div`
.btn{
  width: 197px;
}
`;


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
            <Requisitos />
            {mobile ? <TeInteresa /> : null}
          </>
        );
      case "Tips de seguridad":
        return <ListBullets bullets={data.bullets} showdots />;
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
      <StyledEmpresaNet>
        <ResponsiveHeader>
          <div className="title">
            <h1>Los beneficios</h1>
            <h1>
              de la Banca sin
              <br />
              salir de casa
            </h1>
          </div>
          <div className="copy">
            <h4>Maneja <span>tus cuentas</span> desde la comodidad de <span>tu hogar</span></h4>
          </div>
          <BancoppelBtn amarillo>Me interesa</BancoppelBtn>
        </ResponsiveHeader>
        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/"
        />
        <ProductHeader>
          <h1>
            Empresa<span>Net</span>
          </h1>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body} />
        <Switcher items={CravSections} body={this.body} isRequisitos={this.isRequisitos.bind(this)}/>
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </StyledEmpresaNet>
    );
  }
}

export default EmpresaNet;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../Assets/mano_empresanet.png").default,
      copy: "Servicio de Banca Electrónica, que permite controlar, administrar tus cuentas y realizar operaciones financieras de forma segura.",
    },

    items: [
      {
        icon: require("../Assets/hoja_empresanet.svg").default,
        copy: "Administra tu cuenta de negocios.",
      },
      {
        icon: require("../Assets/clock_empresanet.svg").default,
        copy: "Programa tus operaciones o realízalas en línea.",
      },
      {
        icon: require("../Assets/pulgar_empresanet.svg").default,
        copy: "Operaciones rápidas y seguras.",
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
  // {
  //   section: "Tips de seguridad",
  //   bullets: [
  //     "No anote sus claves, intente memorizarlas para que no estén a la vista de alguien más y cámbielas por lo menos cada tres meses.",
  //     "No proporcione información confidencial por ningún medio, BanCoppel no solicita información personal o financiera por teléfono o por correo electrónico.",
  //     "Ingrese a EmpresaNet a través de su navegador, tecleando la dirección www.bancoppel.com no lo haga a través de direcciones adjuntas (hipervínculos en correos electrónicos).",
  //     "El Token es el nivel más alto de seguridad en EmpresaNet, con este se autorizan las transacciones, por lo que es de uso personal y es responsabilidad de los usuarios asignados por la empresa (Administradores y Operadores), si ya es cliente en caso de robo o extravio comuníquese a Contacto Empresarial (667)758-9978 en Culiacán o al 800 849-6187 para otras ciudades.",
  //   ],
  // },
];
