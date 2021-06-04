import React, { Component } from "react";
import {
  Container,
  Hero,
  BancoppelBtn,
  Accordion,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  ListBullets,
  Switcher,
  ProductHeader,
} from "../Components";
import HeroHome from "../Assets/Hero_NominaBancoppel.svg";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 20px 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .title {
    margin-bottom: 20px;
    h1 {
      text-transform: uppercase;
      color: var(--sky-blue);
      line-height: 35px;
      &:first-child {
        color: var(--night-blue);
      }
    }
  }
  .copy {
    margin-bottom: 20px;
    h4 {
      color: var(--night-blue);
      font-family: futura_normal;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

class NominasBanCoppel extends Component {
  body(data) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return <ListBullets bullets={data.bullets} />;
      default:
        <CardBullets data={data} />;
    }
  }

  render() {
    return (
      <>
        <StyledHeader>
          <Container>
            <div className="title">
              <h1>EL DINERO DE TUS</h1>
              <h1>TRABAJADORES EN</h1>
              <h1>BUENAS NECESIDADES</h1>
            </div>
            <div className="copy">
              <h4>
                Transfiere tus fondos <br /> cuando quieras
              </h4>
            </div>
            <BancoppelBtn amarillo>Haz clic ahora</BancoppelBtn>
          </Container>
        </StyledHeader>
        <Hero btnCoppy="Haz clic ahora" banner={HeroHome} />
        <ProductHeader>
          <h1>
            NÓMINA{" "}
             
            <span>
              BANCOPPEL 
            </span>
          </h1>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body} />
        <Switcher items={CravSections} body={this.body} />
        <ListaProductos />
      </>
    );
  }
}

export default NominasBanCoppel;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../Assets/Persons2.png").default,
      copy: "Un crédito que ajusta los pagos de capital del financiamiento a tu ciclo operativo.",
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
            icon: require("../Assets/blue_coins.svg").default,
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
    bullets: [
      "Solicitud de crédito.",
      "Autorización para consulta historial crediticio.",
      "Estados Financieros: Dictaminados, internos y proyectados.",
      "Información legal del acreditado o del proyecto.",
      "Contacto con ejecutivo.",
    ],
  },
//   {
//     section: "Tips de seguridad",
//     data: [
//       {
//         title: "DESTINO",
//         copy: "Capital de trabajo de corto plazo y/o para cubrir eventualidades de tesorería.",
//         image: require("../Assets/hand_money.svg").default,
//       },
//       {
//         title: "MONTO DE LÍNEA",
//         copy: "En función a las necesidades del capital de trabajo a corto, largo plazo, sujeto a capacidad de pago.",
//         image: require("../Assets/hand_coins.svg").default,
//       },
//       {
//         title: "AMORTIZACIÓN",
//         copy: "Primeros 24 meses: pago de capital e intereses mensual. Últimos 12 meses: pagos periódicos de capital e intereses sin revolvencia.",
//         image: require("../Assets/gear_coin.svg").default,
//       },
//       {
//         title: "TAZA",
//         copy: "Variable.",
//         image: require("../Assets/money_plant.svg").default,
//       },
//       {
//         title: "COMISIONES",
//         copy: "Por apertura y/o anualidad.",
//         image: require("../Assets/card_coins.svg").default,
//       },
//       {
//         title: "PLAZO",
//         copy: "Vigencia de contrato a 36 meses con periodo de revolvencia de 24 meses.",
//         image: require("../Assets/calendar_bill.svg").default,
//       },
//     ],
//   },
 
];
