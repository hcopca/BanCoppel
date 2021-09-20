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
<<<<<<< HEAD
  SwitcherBullets,
=======
>>>>>>> cefda39dcc4f5b43284aad2aba219599755f9375
  TeInteresa,
} from "../Components";
import Hero_ from "../Assets/Heros/hero_nomina.png";
import Hero_responsive from "../Assets/Heros/hero_responsive_nomina.png";
import HeroHome from "../Assets/Heros/banner_nomina.svg";
import styled from "styled-components";
const StyledNominasBanCoppel = styled.div`
.btn{
  width: 197px;
}
`;

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
<<<<<<< HEAD
            <Requisitos />
            {mobile ? <TeInteresa /> : null}
          </>
        );
      case "Tips de seguridad":
        return <SwitcherBullets data={data} />;
=======
            <Requisitos type="secondaryBulls" />
            {mobile ? <TeInteresa /> : null}
          </>
        );

>>>>>>> cefda39dcc4f5b43284aad2aba219599755f9375
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
      <StyledNominasBanCoppel>
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
            <h4><span>Transfiere tus fondos</span> cuando quieras</h4>
          </div>
          <BancoppelBtn amarillo>Haz clic ahora</BancoppelBtn>
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
            NÓMINA <span>BANCOPPEL</span>
          </h1>
        </ProductHeader>
        <Accordion items={CravSections} body={this.body} />
<<<<<<< HEAD
        <Switcher items={CravSections} body={this.body} isRequisitos={this.isRequisitos.bind(this)}/>
        {this.state.Requisitos ? <TeInteresa /> : null}
=======
        <Switcher
          items={CravSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}

>>>>>>> cefda39dcc4f5b43284aad2aba219599755f9375
        <ListaProductos />
      </StyledNominasBanCoppel>
    );
  }
}

export default NominasBanCoppel;

const CravSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../Assets/mano_nomina.png").default,
      copy: "Servicio que brinda la facilidad de transferir de forma masiva o individual el dinero que quieras cuando quieras.",
    },

    items: [
      {
        icon: require("../Assets/blue_watch.svg").default,
        copy: "Ahorra tiempo al momento de realizar los pagos.",
      },
      {
        icon: require("../Assets/blue_person.svg").default,
        copy: "Apertura las cuentas de tus trabajadores de forma individual o masiva.",
      },
      {
        icon: require("../Assets/celhand.svg").default,
        copy: "Facilidad en el pago de las prestaciones laborales de tus trabajadores.",
      },
      {
        icon: require("../Assets/blue_laptop.svg").default,
        copy: "Realiza dispersiones en línea o mediante operaciones programadas.",
      },
      {
        icon: require("../Assets/blue_phone.svg").default,
        copy: "Reportes de todas las operaciones realizadas a tus trabajadores.",
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
<<<<<<< HEAD
  // {
  //   section: "Tips de seguridad",
  //   items: [
  //     {
  //       title: "Personas Morales",
  //       bullets: [
  //         "El Token es el nivel más alto de seguridad en EmpresaNet, con este se autorizan las transacciones, por lo que es de uso personal y es responsabilidad de los usuarios asignados por la empresa (Administradores y Operadores), si ya es cliente en caso de robo o extravio comuníquese a Contacto Empresarial <a href=tel:+(667)758-9978><span>(667)758-9978</span></a> en Culiacán o al <a href=tel:+8008496187>800 849-6187</a>  para otras ciudades.",
  //         "No anote sus claves, intente memorizarlas para que no estén a la vista de alguien más y cámbielas por lo menos cada tres meses.",
  //         "No proporcione información confidencial por ningún medio, BanCoppel no solicita información personal o financiera por teléfono o por correo electrónico.",
  //         "Ingrese a EmpresaNet a través de su navegador, tecleando la dirección www.bancoppel.com; no lo haga a través de direcciones adjuntas (hipervínculos en correos electrónicos).",
  //       ],
  //     },

  //     {
  //       title: "Personas Físicas con Actividad Empresarial",
  //       legals: `"Los tips de seguridad antes señalados serán considerados para todos los efectos a los que haya lugar como preventivos; su aplicación será consecuencia de una decisión personal del cliente y sin responsabilidad alguna para BanCoppel".`,
  //       bullets: [
  //         "Durante tus viajes nunca dejes tus tarjetas en la maleta, mejor guárdalas en la caja de seguridad y/o cárgalas contigo.",

  //         "No dejes tu Tarjeta o documentación personal con firmas en tu automóvil, especialmente en estacionamientos y/o establecimientos con servicio de valet parking.",

  //         "Evita perder de vista tu tarjeta al pagar. Solicita que la transacción se realice en tu presencia. Cuando te devuelvan la tarjeta, asegúrate de que sea la tuya.",

  //         "No prestes tu tarjeta, ni permitas que otras personas la usen en tu nombre.",

  //         "Si alguien te llama por teléfono tpara solicitarte el número de tu Tarjeta y la fecha de vencimiento de la misma, NO PROPORCIONES NINGÚN DATO y cuelga inmediatamente, puede tratarse de un fraude.",

  //         "Guarda en un lugar seguro tu Tarjeta y evita que alguien haga mal uso de ella.",

  //         "Firma tu Tarjeta en el momento que la recibas para que nadie más la firme en tu lugar y pueda utilizarla.",

  //         "Recuerda que el número de identificación personal NIP que elegiste cuando te entregaron tu tarjeta es privado y NO debes proporcionarlo a nadie. Memorízalo y no lo portes contigo. BanCoppel no te realizará llamadas a menos de que necesite verificar alguna información, por lo que se identificará previamente contigo.",

  //         "No dejes tus comprobantes de operación en los cajeros automáticos. Cuando te encuentres en un cajero automático, no aceptes ayuda de nadie aunque te la ofrezcan, aún cuando tu Tarjeta haya quedado retenida en el cajero.",

  //         "En caso de que el cajero automático retenga tu Tarjeta, acude a la Sucursal en donde esté el cajero para reportarla. Si el cajero no está en sucursal o ésta se encuentra cerrada, llama al Centro de Atención Telefónica al:<br/> <a href=tel:+80012267735>800 1226 7735 (800 1BCOPPEL)</a> <br/> Utiliza cajeros automáticos ubicados en sitios seguros.<br/> Si tienes alguna duda, pregunta al personal de BanCoppel que con gusto te atenderán.",
  //       ],
  //     },
  //   ],
  // },
=======
>>>>>>> cefda39dcc4f5b43284aad2aba219599755f9375
];
