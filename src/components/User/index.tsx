import { Button, Container, ImgUser, Name } from "./styles";

export function User() {
  return (
    <Container>
      <ImgUser>

      </ImgUser>
      <Name>
        Pedro Marques
      </Name>
      <Button>
        <i className="fa-solid fa-right-from-bracket"></i>
      </Button>
    </Container>
  );
}