import { Button, Container, ImgUser, Name } from "./styles";

import person from '../../assets/person.png'

export function User() {
  return (
    <Container>
      <ImgUser>
        <img src={person} alt="" />
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