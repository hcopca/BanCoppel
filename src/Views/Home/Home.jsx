import React from "react";
import { Container, BancoppelBtn } from "../../Components";

export default function Home() {
  return (
    <div>
      <Container>
        Hola
        <BancoppelBtn onClick={() => console.log("Hola")}>
          Button 1
        </BancoppelBtn>
        <BancoppelBtn amarillo>Button 1</BancoppelBtn>
        <BancoppelBtn secundario>Button 1</BancoppelBtn>
      </Container>
    </div>
  );
}
