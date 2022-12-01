import { Introduction } from "../Introduction";
import { Login } from "../Login";
//import { Register } from "../Register";
import { Container, ContainerContent } from "./styles";

export function Authentication() {
  return (
    <ContainerContent>
      <Container>
        <Introduction />
        <Login />
      </Container>
    </ContainerContent>
  );
}