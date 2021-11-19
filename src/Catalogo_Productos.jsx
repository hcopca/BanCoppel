const productos = [
  {
    family: "Cuenta Inversión Empresarial",
    name: "Cuenta Inversión Empresarial",
    title_custom: (
      <>
        Cuenta <span>Inversión <br /> Empresarial</span>
      </>
    ),
    homeCopy:
      "La nueva forma de administrar de manera eficiente los recursos de tu empresa.",
    cardcopy: "La nueva forma de administrar los recursos de tu empresa.",
    path: "/cuenta-inversion-empresarial",
    image: require("./Assets/mano_cuenta_empresarial.png").default,
  },
  {
    family: "Nómina",
    name: "Nómina BanCoppel",
    title_custom: (
      <>
        Nómina <br /> <span>BanCoppel</span>
      </>
    ),
    homeCopy:
      "Servicio que brinda la facilidad de transferir de forma masiva o individual el dinero.",
    cardcopy:
      "Servicio que brinda la facilidad de transferir de forma masiva...",
    path: "/nomina-bancoppel",
    image: require("./Assets/mano_nomina.png").default,
  },
  {
    family: "Soluciones de crédito",
    name: "Crédito Simple",

    title_custom: (
      <>
        Crédito
        <br /> <span>Simple</span>
      </>
    ),

    homeCopy: "El financiamiento para impulsar tu negocio.",
    cardcopy: "El financiamiento para impulsar tu negocio.",
    path: "/credito-simple",
    image: require("./Assets/Persons2.png").default,
  },
  // {
  //   family: "Soluciones de crédito",
  //   name: "Crédito Cuenta Corriente CRAV",
  //   title_custom: (
  //     <>
  //       Crédito Cuenta
  //       <br /> <span>Corriente CRAV</span>
  //     </>
  //   ),

  //   homeCopy: "Un crédito diseñado de acuerdo a tus necesidades.",
  //   cardcopy: "Un crédito diseñado de acuerdo a tus necesidades.",
  //   path: "/crav",
  //   image: require("./Assets/Persons1.png").default,
  // },
  {
    family: "Soluciones de crédito",
    name: "Arrendamiento Financiero",
    title_custom: (
      <>
        Arrendamiento
        <br /> <span>Financiero</span>
      </>
    ),
    homeCopy: "Financiamiento de Activo Fijo pensados para tu empresa.",
    cardcopy: "Financiamiento de Activo Fijo pensados para tu empresa.",
    path: "/arrendamiento-financiero",
    image: require("./Assets/IpadHands.png").default,
  },
  {
    family: "Soluciones de crédito",
    name: "Crédito Puente",
    title_custom: (
      <>
        Crédito
        <br /> <span>Puente</span>
      </>
    ),
    homeCopy: "Pensado para crear proyectos habitacionales.",
    cardcopy: "Pensado para crear proyectos habitacionales.",
    path: "/credito-puente",
    image: require("./Assets/GirlHand.png").default,
  },
  {
    family: "Soluciones de crédito",
    name: "Crédito Cuenta Corriente",

    title_custom: (
      <>
        Crédito Cuenta <br /> <span>Corriente</span>
      </>
    ),
    homeCopy: "Apoyamos las necesidades de tu capital de trabajo.",
    cardcopy: "El respaldo que le hacía falta a tu negocio.",
    path: "/credito-amortizable",
    image: require("./Assets/mano_cuenta_amortizable.png").default,
  },
  {
    family: "Soluciones integrales",
    name: "Factoraje",
    title_custom: <>Factoraje <br /><span>Financiero</span></>,
    homeCopy: "Financiamiento que impulsa el crecimiento de tus Proveedores.", //
    cardcopy: "El respaldo que le hacía falta a tu negocio.",
    path: "/factoraje-financiero",
    image: require("./Assets/mano_cuenta_amortizable.png").default,
  },

  {
    family: "Soluciones integrales",
    name: "Monetización de Activos",
    title_custom: (
      <>
        Monetización <br />
        <span>de Activos</span>
      </>
    ),
    homeCopy: "Liquidez sobre tus activos fijos.",
    cardcopy: "Un crédito diseñado de acuerdo a tus necesidades.",
    path: "/monetizacion-activos",
    image: require("./Assets/mano_monetizacion.png").default,
  },
  {
    family: "Soluciones integrales",
    name: "Financiamiento de órdenes de compra",
    title_custom: (
      <>
        Financiamiento de
        <br /> <span>órdenes de compra</span>
      </>
    ),
    homeCopy: "Financiamiento del ciclo operativo sobre tus pedidos confirmados.",
    cardcopy: "Financiamiento de Activo Fijo pensados para tu empresa.",
    path: "/financiamiento-ordenes-compra",
    image: require("./Assets/mano_financiamiento.png").default,
  },
  {
    family: "Soluciones integrales",
    name: "Proyectos de inversión",
    title_custom: (
      <>
        Proyectos
        <br /> <span>de inversión</span>
      </>
    ),
    homeCopy: "Financiamiento de largo plazo para tus proyectos.",
    cardcopy: "Financiamiento de Activo Fijo pensados para tu empresa.",
    path: "/proyectos-inversion",
    image: require("./Assets/mano_proyectos_inversion.png").default,
  },
  {
    family: "EmpresaNET",
    name: "EmpresaNET",
    title_custom: (
      <>
        Empresa <span>Net</span>
      </>
    ),
    homeCopy:
      "Servicio que permite controlar, administrar y realizar operaciones financieras de tus cuentas de forma segura.",
    cardcopy:
      "Servicio que permite controlar, administrar y realizar operaciones financieras de tus cuentas de forma segura.",
    path: "/empresanet",
    image: require("./Assets/mano_empresanet.png").default,
  },
];

export default productos;
