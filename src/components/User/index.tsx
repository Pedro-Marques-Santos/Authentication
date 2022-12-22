import { Button, Container, ImgUser, Name } from "./styles";

import { useNavigate } from "react-router-dom";

import person from '../../assets/person.png'
import { Dispatch, SetStateAction } from "react";

interface UserProps {
  name: string;
  setEmail: Dispatch<SetStateAction<string>>
}

export function User({ name, setEmail }: UserProps) {

  const navegate = useNavigate()

  function comeBackLogin() {
    setEmail('');
    navegate('/index')
  }

  return (
    <Container>
      <ImgUser>
        <img src={person} alt="" />
      </ImgUser>
      <Name>
        {name}
      </Name>
      <Button onClick={comeBackLogin}>
        <i className="fa-solid fa-right-from-bracket"></i>
      </Button>
    </Container>
  );
}