import React, { Component } from "react";
import {
  Hero,
  Accordion,
  Switcher,
  ProductHeader,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Requisitos,
  PerfilSolicitante,
  TeInteresa,
  ResponsiveHeader,
} from "../../Components";
import Hero_ from "../../Assets/Heros/hero_financiamiento.jpg";
import Hero_responsive from "../../Assets/Heros/hero_responsive_financiamiento.jpg";
import HeroHome from "../../Assets/Heros/banner_financiamiento.svg";
import styled from "styled-components";
import Hero_mid from "../../Assets/Heros/img-financiamiento-mid.jpg";

const StyledFinanciamiento = styled.div`
  @media (min-width: 992px) {
    .header_body {
      flex: 7;
    }
  }
`;

class FinanciamientoOrdenesCompra extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  body(data, mobile) {
    if (data.section !== null) {
      switch (data.section) {
        case "Beneficios":
          return <CardBullets data={data} />;
        case "Características":
          return <ListCardsSecondary cards={data.cards} />;
        case "Requisitos":
          return (
            <>
              <Requisitos />
              {mobile ? <TeInteresa /> : null}
            </>
          );
        case "Perfil del solicitante":
          return (
            <PerfilSolicitante
              bullets={[
                "Personas Morales.",
                <>
                  Personas Físicas con Actividad
                  <br /> Empresarial.
                </>,
              ]}
            />
          );
        default:
          console.error("No hay solucion definida", data);
      }
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
      <StyledFinanciamiento>
        <ResponsiveHeader>
          <div className="title">
            <h1>Diseñado para</h1>

            <h1>resolver tus imprevistos</h1>
          </div>
          <div className="copy">
            <h4>
              No te quedes sin lo <br /> indispensable para tu negocio
            </h4>
          </div>
        </ResponsiveHeader>
        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          midImg={Hero_mid}
          path="/"
        />
        <ProductHeader>
          <h2 className="header_product">
            Financiamiento de <span>Órdenes de compra</span>
          </h2>
        </ProductHeader>
        <Accordion items={SolucionesCreditoSections} body={this.body} />
        <Switcher
          items={SolucionesCreditoSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </StyledFinanciamiento>
    );
  }
}

export default FinanciamientoOrdenesCompra;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/mano_financiamiento.png").default,
      copy2:
        "Financiamiento del ciclo operativo sobre tus pedidos confirmados.",
    },

    items: [
      {
        icon: require("../../Assets/laptop_calendar_blue.svg").default,
        copy: "Financiar el ciclo operativo de la empresa a partir de la fecha en que se confirma un pedido.",
      },
      {
        icon: require("../../Assets/billetes_blue_2.svg").default,
        copy: "Los plazos de pago se ajustan a las fechas de cobro de cada pedido.",
      },
      {
        icon: require("../../Assets/lupa_blue.svg").default,
        copy: "Revisiones periódicas al monto de la línea de crédito.",
      },
    ],
  },
  {
    section: "Requisitos",
  },
  {
    section: "Perfil del solicitante",
  },
  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Capital de trabajo.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "En función de históricos de ventas y pedidos confirmados.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: " Intereses mensuales y pago de capital al cobro del pedido y/o factura.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "MONTO A DISPONER",
        copy: "Hasta el 60% del monto del pedido confirmado. Hasta el 85% de la factura.",
        image: require("../../Assets/hands_circle_money.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable.",
        image: require("../../Assets/porcentaje.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Apertura y/o anualidad.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta 360 días por cada disposición en función a la fecha de cobro del pedido.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
];
