import React, { Component } from "react";
import {
  Hero,
  BancoppelBtn,
  Accordion,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Switcher,
  ProductHeader,
  ResponsiveHeader,
  Requisitos,
} from "../../Components";
import HeroHome from "../../Assets/Hero_Arrendamiento.svg";

class ArrendamientoFinanciero extends Component {
  body(data) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return <Requisitos />;
      default:
        <CardBullets data={data} />;
    }
  }

  render() {
    return (
      <>
        <ResponsiveHeader>
          <div className="title">
            <h1>
              Financiamiento <br /> de Activos fijos
            </h1>
            <h1>
              pensados para
              <br />
              tu empresa
            </h1>
          </div>
          <div className="copy">
            <h4>Encuentra el lugar ideal para desarrollar tu potencial.</h4>
          </div>
          <BancoppelBtn amarillo>Quiero saber más</BancoppelBtn>
        </ResponsiveHeader>
        <Hero btnCoppy="Quiero saber más" banner={HeroHome} />
        <ProductHeader>
          <h1>
            Arrendamiento <span>financiero</span>
          </h1>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body} />
        <Switcher items={CravSections} body={this.body} />
        <ListaProductos />
      </>
    );
  }
}

export default ArrendamientoFinanciero;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons2.png").default,
      copy: "Producto de crédito que ayuda a mantener tus activos fijos en uso por una renta mensual.",
    },

    items: [
      {
        icon: require("../../Assets/hand_house_blue.svg").default,
        copy: "Deducción fiscal de rentas.",
      },
      {
        icon: require("../../Assets/Financial_Document.svg").default,
        copy: "Adquisición de activo Fijo con financiamiento del 100% del valor total.",
      },
    ],
  },

  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Adquisición de maquinaria y equipo, ya sea nuevo o usado.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función al valor de los bienes a adquirir en el arrendamiento, sujeto a capacidad de pago.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "AMORTIZACIÓN",
        copy: "Rentas mensuales compuestas por capital e intereses.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TAZA",
        copy: "Variable.",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Apertura y/o anualidad.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta siete años.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
