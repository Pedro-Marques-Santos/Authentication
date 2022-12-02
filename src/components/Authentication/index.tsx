import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication";
import { Introduction } from "../Introduction";
import { Login } from "../Login";
import { Register } from "../Register";
import { Container, ContainerContent } from "./styles";

export function Authentication() {

  const authentication = useContext(AuthenticationContext)

  console.log(authentication)

  if (!authentication) {
    return <></>
  }

  return (
    <ContainerContent>
      <Container>
        <Introduction />
        {authentication.state.gameStage === 'login' && <Login />}
        {authentication.state.gameStage === 'register' && <Register />}
      </Container>
    </ContainerContent>
  );
}