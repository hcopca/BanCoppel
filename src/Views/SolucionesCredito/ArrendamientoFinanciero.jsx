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
  TeInteresa,
} from "../../Components";
import Hero_ from "../../Assets/Heros/hero_arrendamiento.png";
import Hero_responsive from "../../Assets/Heros/hero_arrendamiento_responsive.png";
import HeroHome from "../../Assets/Heros/banner_arrendamiento.svg";
import styled from "styled-components";
const StyledArrendamientoFinanciero = styled.div`
  .btn {
    width: 197px;
  }

  @media (min-width: 992px) {
    .header_body {
      flex: 3;
    }
  }
`;

class ArrendamientoFinanciero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  body(data, mobile) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return (
          <>
            <Requisitos
              type="solucionesCredito"
              push={{ data: "Especificaciones o factura del activo", idx: 1 }}
            />
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
      <StyledArrendamientoFinanciero>
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
            <h4>
              Te damos las herrramientas para <span>crecer tu negocio.</span>
            </h4>
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
            Arrendamiento <span>financiero</span>
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
      </StyledArrendamientoFinanciero>
    );
  }
}

export default ArrendamientoFinanciero;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_arrendamiento.png").default,
      copy2:
        "Producto de crédito que ayuda a mantener tus Activos Fijos en uso por una renta mensual.",
    },

    items: [
      {
        icon: require("../../Assets/hand_house_blue.svg").default,
        copy: "Deducción de intereses de las rentas.",
      },
      {
        icon: require("../../Assets/Financial_Document.svg").default,
        copy: "Opción de compra al finalizar el contrato",
      },
      {
        icon: require("../../Assets/tickets.svg").default,
        copy: "No descapitalizar a la empresa para adquirir los activos que necesitas.",
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
        title: "TASA",
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
