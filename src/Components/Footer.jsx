import React, { Component } from "react";
import styled from "styled-components";
import Afore from "../Assets/Afore.svg";
import Buro from "../Assets/Buro.svg";
import Fintech_Mexico from "../Assets/Fintech_Mexico.svg";
import IPAB from "../Assets/IPAB.svg";
import mejorar from "../Assets/mejorar.svg";
import Youtube from "../Assets/Youtube.png";
import Linkdln from "../Assets/In.png";
import Facebook from "../Assets/facebook.png";
import Logo_bancoppel from "../Assets/logo_bancoppel.svg";
import Play_store from "../Assets/play_store.svg";
import App_store from "../Assets/app_store.svg";
import sello_confianza from "../Assets/sello_confianza.svg"
import Container from "./Container";
import "./styles/custom_accordion_conoceCredito.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import 'react-accessible-accordion/dist/fancy-example.css';

const ContainerFooter = styled.div`
  padding: 60px 0;
  background: linear-gradient(192.32deg, #225aa7 -2.61%, #002a61 95.1%);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  font-family: futura_normal;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

const SimpleColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  display: none;
  flex-direction: column;
  text-align: left;
  @media (min-width: 576px) {
    display: flex;
  }
`;

const ColumnResponsive = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (min-width: 576px) {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  }
`;

const Link = styled.a`
  color: #fff;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 21px;
  font-family: futura_book;

  text-decoration: none;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: #ffbe12;
    transition: 200ms ease-in;
  }
`;

const SubLink = styled.a`
  color: #fff;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 21px;
  font-family: futura_book;
  color: #81c1ea;

  text-decoration: none;
  &:hover {
    color: #ffbe12;
    transition: 200ms ease-in;
  }
`;

const Title = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 576px) {
    margin-bottom: 0px;
  }
`;

const RowLogotipos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  width: 100%;
  @media (max-width: 576px) {
    justify-content: space-evenly;
  }
`;

const HrFooter = styled.hr`
  margin: 30px 0;
`;

const CopyRight = styled.p`
  margin: 15px;
  font-size: 12px;
`;
const FinalFooter = styled.p`
  margin: 15px 15px 15px 20px;
  font-size: 12px;
`;

const RowNormal = styled.div`
  color: white;
  text-align: center;
  p {
    font-family: Futura_light;
    font-size: 11px;
    line-height: 130%;
    text-align: center;
    color: #ffffff;
  }
`;

const ImgRedesSociales = styled.img`
  margin-right: 40px;
  margin-top: 5px;
  height: 18px;
`;
const RowTituloFooter = styled.div`
  margin-bottom: 30px;
  img {
    height: 28px;
  }
`;
export default class Footer extends Component {
  render() {
    
    return (
      <>
        <ContainerFooter>
          <Container>
            <Wrapper>
              <RowTituloFooter>
                <img src={Logo_bancoppel} alt="Logo_bancoppel"></img>
              </RowTituloFooter>
              <Row>
                <ColumnResponsive>
                  <Accordion
                    allowMultipleExpanded={false}
                    allowZeroExpanded={true}
                  >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="accordion__button_CC">
                          <Title>Acerca de BanCoppel</Title>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="accordion__panel_CC">
                        <Link href="https://bancoppel.com/acerca_bancoppel/quienes_somos.html" target="_blank" rel="noreferrer">¿Quiénes somos?</Link>
                        <br />
                        <Link href="https://www.bancoppel.com/servicios_empresas/faq.html" target="_blank">Preguntas frecuentes</Link>
                        <br />
                        <Link href="https://bancoppel.com/acerca_bancoppel/info_corp.html" target="_blank">Información corporativa</Link>
                        <br />
                        <Link href="https://bancoppel.com/plandeapoyo/index.html" target="_blank">
                          Plan de apoyo para cuidar tu crédito
                        </Link>
                        <br />
                        <Link href="https://bancoppel.com/modal_bcopp/condusef.htm" target="_blank">
                          Unidad especializada BanCoppel Condusef
                        </Link>
                        <br />
                        <Link href="https://bancoppel.com/acerca_bancoppel/ipab.html" target="_blank">Productos protegidos por el IPAB</Link>
                        <br />
                        <Link href="https://bancoppel.com/acerca_bancoppel/aviso.html" target="_blank">Aviso de privacidad</Link>
                        <br />
                        <Link href="https://bancoppel.com/pdf/aviso_robo_de_identidad.pdf" target="_blank">Robo de identidad</Link>
                        <br />
                        <Link href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a5a6" target="_blank">Tarifas y comisiones</Link>
                        <br />
                        <Link href="https://bancoppel.com/corresponsales/index.html" target="_blank">Corresponsales</Link>
                        <br />
                        <Link href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a41f" target="_blank">Despachos de cobranza internos</Link>
                        <br />
                        <Link href="https://bancoppel.com/pdf/Despacho_de_Cobranza_Externos.pdf" target="_blank">Despachos de cobranza externos</Link>
                        <br />
                        <Link href="https://bancoppel.com/acerca_bancoppel/tips.html" target="_blank">Tips de seguridad</Link>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="accordion__button_CC">
                          <Title>Contacto</Title>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="accordion__panel_CC">
                        <Link href="tel:+8008496187">  Lada sin costo: 800 849 6187</Link>
                        <br />
                        {/* <Link href="#">EU. y Canadá: 866 2543790</Link>
                        <br /> */}
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <Link
                            href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg"
                            target="_blank"
                          >
                            <ImgRedesSociales src={Youtube}></ImgRedesSociales>
                          </Link>
                          <Link href="https://www.linkedin.com/company/bancoppel/" target="_blank">
                            <ImgRedesSociales src={Linkdln}></ImgRedesSociales>
                          </Link>
                          <Link
                            href="https://www.facebook.com/BanCoppel/"
                            target="_blank"
                          >
                            <ImgRedesSociales src={Facebook}></ImgRedesSociales>
                          </Link>
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="accordion__button_CC">
                          <Title>Descarga</Title>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="accordion__panel_CC">
                        <SimpleColumn>
                          <img
                            src={Play_store}
                            alt="logo_playstore"
                            style={{ width: "129.21px" }}
                          ></img>
                          <br></br>
                          <img
                            src={App_store}
                            alt="logo_appstore"
                            style={{ width: "129.21px" }}
                          ></img>
                        </SimpleColumn>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </ColumnResponsive>

                <Column>
                  <Title>Acerca de BanCoppel</Title>
                  <Link href="https://bancoppel.com/acerca_bancoppel/quienes_somos.html" target="_blank">¿Quiénes somos?</Link>
                  <Link href="https://www.bancoppel.com/servicios_empresas/faq.html" target="_blank">Preguntas frecuentes</Link>
                  <Link href="https://bancoppel.com/acerca_bancoppel/info_corp.html" target="_blank">Información corporativa</Link>
                  <Link href="https://bancoppel.com/plandeapoyo/index.html" target="_blank">Plan de apoyo para cuidar tu crédito</Link>
                  <Link href="https://bancoppel.com/modal_bcopp/condusef.htm" target="_blank">Unidad especializada BanCoppel Condusef</Link>
                  <Link href="https://bancoppel.com/acerca_bancoppel/ipab.html" target="_blank">Productos protegidos por el IPAB</Link>
                </Column>
                <Column>
                  {/* <Title>&nbsp;</Title> */}
                  <Link href="https://bancoppel.com/acerca_bancoppel/aviso.html" target="_blank">Aviso de privacidad</Link>
                  <Link href="https://bancoppel.com/pdf/aviso_robo_de_identidad.pdf" target="_blank">Robo de identidad</Link>
                  <Link href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a5a6" target="_blank">Tarifas y comisiones</Link>
                  <Link href="https://bancoppel.com/corresponsales/index.html" target="_blank">Corresponsales</Link>
                  <Link href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a41f" target="_blank">Despachos de cobranza internos </Link>
                  <Link href="https://bancoppel.com/pdf/Despacho_de_Cobranza_Externos.pdf" target="_blank">Despachos de cobranza externos </Link>
                  <Link href="https://bancoppel.com/acerca_bancoppel/tips.html" target="_blank">Tips de seguridad</Link>
                </Column>
                <Column>
                  <Title>Contacto</Title>
                  <Link href="tel:+8008496187">
                    Lada sin costo: 800 849 6187
                  </Link>
                  {/* <Link href="tel:+8662543790">EU. y Canadá: 866 2543790</Link> */}
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Link
                      href="https://www.facebook.com/BanCoppel/"
                      target="_blank"
                    >
                      <ImgRedesSociales src={Facebook}></ImgRedesSociales>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/bancoppel/"
                      target="_blank"
                    >
                      <ImgRedesSociales src={Linkdln}></ImgRedesSociales>
                    </Link>
                    <Link
                      href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg"
                      target="_blank"
                    >
                      <ImgRedesSociales src={Youtube}></ImgRedesSociales>
                    </Link>
                  </div>
                </Column>
                <Column>
                  <Title>Descarga</Title>
                  <SimpleColumn>
                    <Link
                      href="https://play.google.com/store/apps/details?id=mx.com.miapp"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={Play_store}
                        alt="logo_playstore"
                        style={{ width: "129.21px" }}
                      ></img>
                    </Link>

                    <Link
                      href="https://apps.apple.com/mx/app/bancoppel-express/id1293933664"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={App_store}
                        alt="logo_appstore"
                        style={{ width: "129.21px" }}
                      ></img>
                    </Link>
                  </SimpleColumn>
                </Column>
              </Row>
              <HrFooter color="#36679A" size="5px" />
              <RowLogotipos>
                <Link href="https://www.gob.mx/ipab" target="_blank">
                  <img src={IPAB} alt="logo_ipab" />
                </Link>
                <Link href="https://www.coppel.com/" target="_blank">
                  <img src={mejorar} alt="logo_coppel" />
                </Link>
                <Link href="https://www.aforecoppel.com/#/" target="_blank">
                  <img src={Afore} alt="logo_afore" />
                </Link>
                <Link href="https://www.fintechmexico.org/" target="_blank">
                  <img src={Fintech_Mexico} alt="logo_fintech" />
                </Link>
                <Link
                  href="https://www.bancoppel.com/modal_bcopp/buro.html"
                  target="_blank"
                >
                  <img src={Buro} alt="logo_buro" />
                </Link>
                {/* <Link href="https://sellosdeconfianza.org.mx/" target="_blank"> */}
                <Link onClick={() => window.open("https://sellosdeconfianza.org.mx/", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")} target="_blank">
                  <img src={sello_confianza} alt="logo_sello" />
                </Link>
                {/* <a href="javascript:window.open('http://norfipc.com/','','width=600,height=400,left=50,top=50,toolbar=yes');void 0">Nueva nueva ventana</a><br /> */}
              </RowLogotipos>
              <RowNormal>
                <CopyRight>
                  Copyright © {new Date().getFullYear()} BanCoppel S.A.
                  Institución de Banca Múltiple - Todos los derechos reservados
                </CopyRight>
                <FinalFooter>
                  <SubLink href="https://www.bancoppel.com/acerca_bancoppel/terminos.html" target="_blank">Términos y Condiciones de Uso</SubLink> |{" "}
                  <SubLink href="https://bancoppel.com/acerca_bancoppel/aviso.html" target="_blank">Aviso de Privacidad</SubLink> |{" "}
                  <SubLink href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5" target="_blank">
                    Consulta los costos y las comisiones de nuestros productos.
                  </SubLink>
                </FinalFooter>
                <p>
                  BanCoppel S.A. Institución de Banca Múltiple es una persona
                  moral distinta a Coppel S.A. de C.V. y a Afore Coppel S.A. de
                  C.V., así como de cualquiera de sus negocios asociados o
                  vinculados.
                </p>
              </RowNormal>
            </Wrapper>
          </Container>
        </ContainerFooter>
      </>
    );
  }
}
