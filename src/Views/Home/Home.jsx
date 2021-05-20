import React from "react";
import { Container, Hero, Footer } from "../../Components";
import styled from "styled-components";

const StyledHome = styled.div``;

export default function Home() {
  return (
    <StyledHome>
      <Hero>
        <Container>hola</Container>
      </Hero>
      <Footer/>
    </StyledHome>
  );
}
