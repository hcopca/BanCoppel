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
];
