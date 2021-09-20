import React, { Component } from "react";
import {
  ResponsiveHeader,
  Hero,
  BancoppelBtn,
  Accordion,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Requisitos,
  Switcher,
  ProductHeader,
  TeInteresa,
} from "../Components";
import HeroHome from "../Assets/Hero_NominaBancoppel.svg";

class NominasBanCoppel extends Component {
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
        <ResponsiveHeader>
          <div className="title">
            <h1>EL DINERO DE TUS</h1>
            <h1>
              TRABAJADORES EN
              <br />
              BUENAS NECESIDADES
            </h1>
          </div>
          <div className="copy">
            <h4>Transfiere tus fondos cuando quieras</h4>
          </div>
          <BancoppelBtn amarillo>Haz clic ahora</BancoppelBtn>
        </ResponsiveHeader>

        <Hero btnCoppy="Haz clic ahora" banner={HeroHome} />
        <ProductHeader>
          <h1>
            NÓMINA <span>BANCOPPEL</span>
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
      copy: "Servicio que brinda la facilidad de transferir de forma masiva o individual el dinero que quieras cuando quieras.",
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
  },
];
