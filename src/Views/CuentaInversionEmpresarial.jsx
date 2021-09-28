import React, { Component } from "react";
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
import Hero_ from "../Assets/Heros/hero_cuenta_empresarial.png";
import Hero_responsive from "../Assets/Heros/hero_responsive_empresarial.png";
import HeroHome from "../Assets/Heros/banner_cuenta_empresarial.svg";
import styled from "styled-components";

const StyledInversionEmpresarial = styled.div`
  @media (min-width: 992px) {
    .header_body {
      flex: 5;
    }
  }
`;

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
          path="/"
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
        "La nueva forma de administrar de manera eficiente los recursos de tu empresa.",
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
