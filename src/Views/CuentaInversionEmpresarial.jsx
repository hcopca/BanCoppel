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
} from "../Components";
import HeroHome from "../Assets/Hero_CuentaInversionEmpresarial.svg";
import styled from "styled-components";

const RowCards = styled.div`
  display: flex;
  justify-content: space-between;
  .SecondaryCardBlue {
    margin: 0;
    justify-content: center;
  }
`;

class EmpresaNet extends Component {
  body(data) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Requisitos":
        return <Requisitos />;
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
        <Hero btnCoppy="Contáctanos" banner={HeroHome} />
        <ProductHeader>
          <h1>
            Cuenta <span>Inversión Empresarial</span>
          </h1>
        </ProductHeader>
        <Accordion items={InversionEmpresarialSections} body={this.body} />
        <Switcher items={InversionEmpresarialSections} body={this.body} />
        <ListaProductos />
      </>
    );
  }
}

export default EmpresaNet;

const InversionEmpresarialSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../Assets/Persons2.png").default,
      copy: "La nueva forma de administrar de manera eficiente los recursos de tu empresa.",
    },

    items: [
      {
        icon: require("../Assets/money_plant_blue.svg").default,
        copy: "Le genera una tasa de rendimiento mensual.",
      },
      {
        icon: require("../Assets/Sheets_blue.svg").default,
        copy: " Obtén reportes de tus operaciones.",
        bullet: "Eficiencia:",
      },
      {
        icon: require("../Assets/calendar_blue.svg").default,
        copy: " Servicio 365 días de año. Facilita la administración de los recursos al realizar las operaciones por internet.",
        bullet: "Disponibilidad:",
      },

      {
        icon: require("../Assets/blue_monitor.svg").default,
        copy: "Carga masiva de dispersión para pagar a los trabajadores en línea o programadas.",
      },
    ],
  },

  {
    section: "Caracteristicas",
    cards: [
      {
        copy: "Cuenta eje empresarial (1200) se parametriza en tasa y monto.",
        image: require("../Assets/hand_money.svg").default,
      },
      {
        copy: "Pagará rendimientos mensuales con base en el Saldo Promedio Mensual de la cuenta.",
        image: require("../Assets/hand_coins.svg").default,
      },
      {
        copy: "Los rendimientos serán abonados en la misma cuenta.",
        image: require("../Assets/gear_coin.svg").default,
      },
      {
        copy: "El cambio de tasa se realizará automáticamente.",
        image: require("../Assets/money_plant.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
  {
    section: "Tips de seguridad",
    items: [
      {
        title: "Cuenta Inversión Empresarial",
        bullets: [
          "No anote sus claves, intente memorizarlas para que no estén a la vista de alguien más y cámbielas por lo menos cada tres meses.",
          "No proporcione información confidencial por ningún medio, BanCoppel no solicita información personal o financiera por teléfono o por correo electrónico.",
          "Ingrese a EmpresaNet a través de su navegador, tecleando la dirección www.bancoppel.com; no lo haga a través de direcciones adjuntas (hipervínculos en correos electrónicos).",
          "El Token es el nivel más alto de seguridad en EmpresaNet, con este se autorizan las transacciones, por lo que es de uso personal y es responsabilidad de los usuarios asignados por la empresa (Administradores y Operadores), si ya es cliente en caso de robo o extravio comuníquese a Contacto Empresarial <a href=tel:+(667)758-9978><span>(667)758-9978</span></a> en Culiacán o al <a href=tel:+8008496187>800 849-6187</a>  para otras ciudades.",
        ],
      },

      {
        title: "Cuenta Eje Empresarial Cheques",
        bullets: [
          "No anote sus claves, intente memorizarlas para que no estén a la vista de alguien más y cámbielas por lo menos cada tres meses.",

          "No proporcione información confidencial por ningún medio, BanCoppel no solicita información personal o financiera por teléfono o por correo electrónico.",

          "Ingrese a EmpresaNet a través de su navegador, tecleando la dirección www.bancoppel.com; no lo haga a través de direcciones adjuntas (hipervínculos en correos electrónicos).",

          "El Token es el nivel más alto de seguridad en EmpresaNet, con este se autorizan las transacciones, por lo que es de uso personal y es responsabilidad de los usuarios asignados por la empresa (Administradores y Operadores), si ya es cliente en caso de robo o extravio comuníquese a Contacto Empresarial <a href=tel:+(667)758-9978><span>(667)758-9978</span></a> en Culiacán o al <a href=tel:+8008496187>800 849-6187</a>  para otras ciudades.",

          "Revise que el talonario y los cheques no estén dañados y verifique que la numeración de los folios sea consecutiva.",

          "Verifique que el número de cheques coincida con la cantidad que acepto recibir al momento de tramitar su chequera.",

          "Guarde su chequera en un lugar seguro, no se deje al alcance de terceros y en caso de robo o extravío realice la cancelación en el portal.",

          "En caso de robo o extravió puede cancelar sus cheques o chequeras desde EmpresaNet o comuníquese a Contacto Empresarial   en Culiacán o al <a href=tel:+(667)758-9978 >(667)758-9978 </a>para otras ciudades.",

          "Expide tus cheques a nombre del beneficiario y preferentemente con la leyenda “Para abono a cuenta”.",
        ],
      },
    ],
  },
];
