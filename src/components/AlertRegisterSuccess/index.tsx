import { Container, ContainerContent } from "./styles";

interface AlertProps {
  alertSuccess: boolean;
}

export function AlertRegisterSuccess({ alertSuccess }: AlertProps) {
  return (
    <Container alertSuccess={alertSuccess}>
      <ContainerContent>
        Register Success
      </ContainerContent>
    </Container>
  );
}