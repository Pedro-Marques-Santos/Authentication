import { User } from "../User";
import { Container, ContainerContent, ErrorAcc, Icon, Tag, UserData, ButtonLogin } from "./styles";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useState } from "react";

interface UserProps {
  name: string;
  token: string;
}

interface UserToken {
  email: string;
}

export function Profile() {
  const [email, setEmail] = useState("");
  const navegate = useNavigate();
  const location = useLocation();

  function ReturnLogin() {
    navegate('/index')
  }

  async function tokenProfile(user: UserProps): Promise<void> {
    let data = {
      token: user.token
    }

    let response = await fetch('http://localhost:3333/ProfileUser', {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    let result = await response.json() as UserToken;
    setEmail(result.email);
  }

  if (!location.state) {
    return <>
      <ErrorAcc>
        <div>Não foi possível acessar a conta</div>
        <div>Por favor, faça login novamente</div>
        <ButtonLogin onClick={ReturnLogin}>LOGIN</ButtonLogin>
      </ErrorAcc>
    </>
  }

  const user = location.state.user as UserProps;

  tokenProfile(user);


  return (
    <ContainerContent>
      <Container>
        <User
          name={user.name}
          setEmail={setEmail}
        />
        <UserData>
          <Tag>
            <Icon><i className="fa-solid fa-envelope"></i></Icon>
            <div>{email}</div>
          </Tag>
          <Tag>
            <Icon><i className="fa-solid fa-graduation-cap"></i></Icon>
            <div>Lenguages</div>
          </Tag>
          <Tag>
            <Icon><i className="fa-solid fa-user-graduate"></i></Icon>
            <div>Courses</div>
          </Tag>
          <Tag>
            <Icon><i className="fa-solid fa-user-plus"></i></Icon>
            <div>Friends</div>
          </Tag>
        </UserData>
      </Container>
    </ContainerContent>
  );
}