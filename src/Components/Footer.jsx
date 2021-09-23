import React, { Component } from "react";
import styled from "styled-components";
import Afore from "../Assets/Afore.svg";
import Buro from "../Assets/Buro.svg";
import El_punto_es_mejorar from "../Assets/El_punto_es_mejorar.svg";
import Fintech_Mexico from "../Assets/Fintech_Mexico.svg";
import IPAB from "../Assets/IPAB.svg";
import sello_confianza from "../Assets/sello_confianza.svg";

import Youtube from "../Assets/Youtube.png";
import Linkdln from "../Assets/In.png";
import Facebook from "../Assets/facebook.png";
import Logo_bancoppel from "../Assets/logo_bancoppel.svg";
import Play_store from "../Assets/play_store.svg";
import App_store from "../Assets/app_store.svg";

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
  padding:60px 0; 
  //background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
  background: linear-gradient(192.32deg, #225AA7 -2.61%, #002A61 95.1%);
  //background: radial-gradient(circle, var(--storm-blue), #04316B);
  // background: var(--storm-blue);
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
  width:100%;
  margin: 0 auto;
`;

const SimpleColumn=styled.div`
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
  //display: grid;
  //// grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  // grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  //grid-gap: 20px;
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
  &:hover {
    color: #FFBE12;
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
    color: #FFBE12;
    transition: 200ms ease-in;
  }
`;


const Title = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;

  @media (max-width: 576px) {
    margin-bottom: 0px;
  }
`;

// const Icon = styled.i`
//   font-size: 18px;
//   margin-right: 16px;
// `;

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
  margin: 35px 15px 15px 15px;
  font-size: 12px;
`;
const FinalFooter = styled.p`
  margin: 15px 15px 15px 20px;
  font-size: 12px;
`;

const RowNormal = styled.div`
  color: white;
  text-align: center;
  p{
      font-family: Futura_light;
      font-size: 11px;
      line-height: 130%;
      text-align: center;
      color: #FFFFFF;
    }
`;

const ImgRedesSociales = styled.img`
  margin-right: 40px;
  margin-top: 5px;
  height: 25.43px;
`;
const RowTituloFooter = styled.div`
  margin-bottom: 30px;
`;

// const styl = styled.section`
//   .accordion__button {
//     color: white;
//     cursor: pointer;
//     padding: 18px;
//     width: 100%;
//     text-align: left;
//     border: none;
//   }
// `;

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
                        <Title>Acerca de Bancoppel</Title>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion__panel_CC">
                      <Link href="#">¿Quiénes somos?</Link>
                      <br />
                      <Link href="#">Preguntas frecuentes</Link>
                      <br />
                      <Link href="#">Información corporativa</Link>
                      <br />
                      <Link href="#">Plan de apoyo para cuidar tu crédito</Link>
                      <br />
                      <Link href="#">
                        Unidad especializada Bancoppel Condusef
                      </Link>
                      <br />
                      <Link href="#">Productos protegidos por el IPAB</Link>
                      <br />
                      <Link href="#">Aviso de privacidad</Link>
                      <br />
                      <Link href="#">Robo de identidad</Link>
                      <br />
                      <Link href="#">Tarifas y comisiones</Link>
                      <br />
                      <Link href="#">Corresponsales</Link>
                      <br />
                      <Link href="#">Despachos de cobranza </Link>
                      <br />
                      <Link href="#">Tips de seguridad</Link>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordion__button_CC">
                        <Title>Contacto</Title>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion__panel_CC">
                      <Link href="#">Lada sin costo: 800 1 2267735</Link>
                      <br />
                      <Link href="#">EU. y Canadá: 866 2543790</Link>
                      <br />
                      <div style={{ display: "flex", flexDirection: "row" }}>
                      <Link href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg" target="_blank"><ImgRedesSociales src={Youtube}></ImgRedesSociales></Link>
                        <Link href="#" target="_blank"><ImgRedesSociales src={Linkdln}></ImgRedesSociales></Link>
                        <Link href="https://www.facebook.com/BanCoppel/" target="_blank"><ImgRedesSociales src={Facebook}></ImgRedesSociales></Link>
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
                        <img src={Play_store} alt="" style={{width:'129.21px'}}></img>
                        <br></br>
                        <img src={App_store} alt="" style={{width:'129.21px'}}></img>
                      </SimpleColumn>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </ColumnResponsive>

              <Column>
                <Title>Acerca de Bancoppel</Title>
                <Link href="#">¿Quiénes somos?</Link>
                <Link href="#">Preguntas frecuentes</Link>
                <Link href="#">Información corporativa</Link>
                <Link href="#">Plan de apoyo para cuidar tu crédito</Link>
                <Link href="#">Unidad especializada Bancoppel Condusef</Link>
                <Link href="#">Productos protegidos por el IPAB</Link>
              </Column>
              <Column>
                <Title>&nbsp;</Title>
                <Link href="#">Aviso de privacidad</Link>
                <Link href="#">Robo de identidad</Link>
                <Link href="#">Tarifas y comisiones</Link>
                <Link href="#">Corresponsales</Link>
                <Link href="#">Despachos de cobranza </Link>
                <Link href="#">Tips de seguridad</Link>
              </Column>
              <Column>
                <Title>Contacto</Title>
                <Link href="tel:+80012267735">Lada sin costo: 800 1 2267735</Link>
                <Link href="tel:+8662543790">EU. y Canadá: 866 2543790</Link>
                <div style={{ display: "flex", flexDirection: "row" }}>
                <Link href="https://www.facebook.com/BanCoppel/" target="_blank"><ImgRedesSociales src={Facebook}></ImgRedesSociales></Link>
                <Link href="#" target="_blank"><ImgRedesSociales src={Linkdln}></ImgRedesSociales></Link>
                <Link href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg" target="_blank"><ImgRedesSociales src={Youtube}></ImgRedesSociales></Link>
                 
                  
                </div>
              </Column>
              <Column>
                <Title>Descarga</Title>

                <SimpleColumn>
                <Link href="https://play.google.com/store/apps/details?id=mx.com.miapp" target="_blank"> <img src={Play_store} alt="" style={{width:'129.21px'}}></img></Link>

                <Link href="https://apps.apple.com/mx/app/bancoppel-express/id1293933664" target="_blank">  <img src={App_store} alt="" style={{width:'129.21px'}}></img></Link>
                </SimpleColumn>
              </Column>
            </Row>
            <HrFooter color="#36679A" size="5px" />
            <RowLogotipos>
            <Link href="https://www.gob.mx/ipab" target="_blank"><img src={IPAB} alt="Fondo_mujer" /></Link>
            <Link href="https://www.coppel.com/" target="_blank"><img src={El_punto_es_mejorar} alt="Fondo_mujer" /></Link>
            <Link href="https://www.aforecoppel.com/#/" target="_blank"><img src={Afore} alt="Fondo_mujer" /></Link>
            <Link href="https://www.fintechmexico.org/" target="_blank"><img src={Fintech_Mexico} alt="Fondo_mujer" /></Link>
            <Link href="https://www.bancoppel.com/modal_bcopp/buro.html" target="_blank"><img src={Buro} alt="Fondo_mujer" /></Link>
            <Link href="https://sellosdeconfianza.org.mx/" target="_blank"><img src={sello_confianza} alt="Fondo_mujer" /></Link>
            </RowLogotipos>
            <RowNormal>
              <CopyRight>
                Copyright © {new Date().getFullYear()} BanCoppel S.A.
                Institución de Banca Múltiple - Todos los derechos reservados
              </CopyRight>
              <FinalFooter>
                <SubLink href="#">Términos y Condiciones de Uso</SubLink> |{" "}
                <SubLink href="#">Aviso de Privacidad</SubLink> |{" "}
                <SubLink href="#">
                  Consulta los costos y las comisiones de nuestros productos.
                </SubLink>
              </FinalFooter>
                  <p>BanCoppel S.A. Institución de Banca Múltiple es una persona moral distinta a Coppel S.A. de C.V. y a Afore Coppel S.A. de C.V., así como de cualquiera de sus negocios asociados o vinculados.</p>              
            </RowNormal>
          </Wrapper>
          </Container>
        </ContainerFooter>
        
      </>
    );
  }
}
