import { Container, ContainerContent } from "./styles";

interface AlertProps {
  alertError: boolean;
}

export function AlertRegisterError({ alertError }: AlertProps) {
  return (
    <Container alertError={alertError}>
      <ContainerContent>
        Email already registered
      </ContainerContent>
    </Container>
  );
}