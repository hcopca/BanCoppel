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
  TeInteresa,
} from "../Components";
import HeroHome from "../Assets/Her_empresaNet.svg";

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
            <h1>Los beneficios</h1>
            <h1>
              de la Banca sin
              <br />
              salir de casa
            </h1>
          </div>
          <div className="copy">
            <h4>Maneja tus cuentas desde la comodidad de tu hogar</h4>
          </div>
          <BancoppelBtn amarillo>Únete</BancoppelBtn>
        </ResponsiveHeader>
        <Hero btnCoppy="Únete" banner={HeroHome} />
        <ProductHeader>
          <h1>
            Empresa<span>Net</span>
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

export default EmpresaNet;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../Assets/Persons2.png").default,
      copy: "Servicio de Banca Electrónica, que permite controlar, administrar tus cuentas y realizar operaciones financieras de forma segura.",
    },

    items: [
      {
        icon: require("../Assets/World_card_blue.svg").default,
        copy: "Operaciones en línea que se pueden aplicar el mismo día o puedes programarlas para cuando tu quieras.",
        bullet: "Rapidez:",
      },
      {
        icon: require("../Assets/blue_cell.svg").default,
        copy: "Realiza tus operaciones desde cualquier parte del mundo, sólo necesitas tener acceso a internet.",
        bullet: "Comodidad:",
      },
      {
        icon: require("../Assets/blue_watch.svg").default,
        copy: "para realizar operaciones con horarios extensos.",
        bullet: "Flexibilidad",
      },

      {
        icon: require("../Assets/blue_person.svg").default,
        copy: "Asigna un usuario para llevar la administración de nuestro servicio.",
        bullet: "Control:",
      },
      {
        icon: require("../Assets/shield_blue.png").default,
        copy: "Seguridad para realizar tus operaciones con la tranquilidad de que tu información estará segura en nuestros canales. Contarás con usuario único y contraseña personalizada. Ambos confidenciales e intransferibles. Dispositivo electrónico de seguridad Token.",
      },
    ],
  },
  {
    section: "Requisitos",
  },
];
