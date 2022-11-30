import { Introduction } from "../Introduction";

import { Register } from "../Register";
import { Container, ContainerContent } from "./styles";

export function Authentication() {
  return (
    <ContainerContent>
      <Container>
        <Introduction />
        <Register />
      </Container>
    </ContainerContent>
  );
}