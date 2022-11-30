import { User } from "../User";
import { Container, ContainerContent, UserData } from "./styles";

export function Profile() {
  return (
    <ContainerContent>
      <Container>
        <User />
        <UserData>Data</UserData>
      </Container>
    </ContainerContent>
  );
}