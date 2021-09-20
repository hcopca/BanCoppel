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
  SecondaryCardBlue,
  SwitcherBullets,
  TeInteresa,
  Consulta,
} from "../Components";
import Hero_ from "../Assets/Heros/hero_cuenta_empresarial.png";
import Hero_responsive from "../Assets/Heros/hero_responsive_empresarial.png";
import HeroHome from "../Assets/Heros/banner_cuenta_empresarial.svg";
import styled from "styled-components";

const RowCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  .SecondaryCardBlue {
    margin: 0;
    justify-content: center;
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
            <Requisitos />
            {mobile ? <TeInteresa /> : null}
          </>
        );
      case "Caracteristicas":
        return (
          <RowCards>
            {data.cards.map((card, idx) => {
              return <SecondaryCardBlue card={card} key={idx} />;
            })}
          </RowCards>
        );
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
            <h4>La cuenta que tu empresa necesita.r</h4>
          </div>
          <BancoppelBtn amarillo>Contáctanos</BancoppelBtn>
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
    section: "Caracteristicas",
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
  // {
  //   section: "Tips de seguridad",
  //   items: [
  //     {
  //       title: "Cuenta Inversión Empresarial",
  //       bullets: [
  //         "No anote sus claves, intente memorizarlas para que no estén a la vista de alguien más y cámbielas por lo menos cada tres meses.",
  //         "No proporcione información confidencial por ningún medio, BanCoppel no solicita información personal o financiera por teléfono o por correo electrónico.",
  //         "Ingrese a EmpresaNet a través de su navegador, tecleando la dirección www.bancoppel.com; no lo haga a través de direcciones adjuntas (hipervínculos en correos electrónicos).",
  //         "El Token es el nivel más alto de seguridad en EmpresaNet, con este se autorizan las transacciones, por lo que es de uso personal y es responsabilidad de los usuarios asignados por la empresa (Administradores y Operadores), si ya es cliente en caso de robo o extravio comuníquese a Contacto Empresarial <a href=tel:+(667)758-9978><span>(667)758-9978</span></a> en Culiacán o al <a href=tel:+8008496187>800 849-6187</a>  para otras ciudades.",
  //       ],
  //     },

  //     {
  //       title: "Cuenta Eje Empresarial Cheques",
  //       bullets: [
  //         "No anote sus claves, intente memorizarlas para que no estén a la vista de alguien más y cámbielas por lo menos cada tres meses.",

  //         "No proporcione información confidencial por ningún medio, BanCoppel no solicita información personal o financiera por teléfono o por correo electrónico.",

  //         "Ingrese a EmpresaNet a través de su navegador, tecleando la dirección www.bancoppel.com; no lo haga a través de direcciones adjuntas (hipervínculos en correos electrónicos).",

  //         "El Token es el nivel más alto de seguridad en EmpresaNet, con este se autorizan las transacciones, por lo que es de uso personal y es responsabilidad de los usuarios asignados por la empresa (Administradores y Operadores), si ya es cliente en caso de robo o extravio comuníquese a Contacto Empresarial <a href=tel:+(667)758-9978><span>(667)758-9978</span></a> en Culiacán o al <a href=tel:+8008496187>800 849-6187</a>  para otras ciudades.",

  //         "Revise que el talonario y los cheques no estén dañados y verifique que la numeración de los folios sea consecutiva.",

  //         "Verifique que el número de cheques coincida con la cantidad que acepto recibir al momento de tramitar su chequera.",

  //         "Guarde su chequera en un lugar seguro, no se deje al alcance de terceros y en caso de robo o extravío realice la cancelación en el portal.",

  //         "En caso de robo o extravió puede cancelar sus cheques o chequeras desde EmpresaNet o comuníquese a Contacto Empresarial   en Culiacán o al <a href=tel:+(667)758-9978 >(667)758-9978 </a>para otras ciudades.",

  //         "Expide tus cheques a nombre del beneficiario y preferentemente con la leyenda “Para abono a cuenta”.",
  //       ],
  //     },
  //   ],
  // },
];
