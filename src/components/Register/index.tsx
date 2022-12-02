import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication";
import { ButtonLogin, ButtonRegister, Container, IconeInput } from "./styles";

export function Register() {

  const authentication = useContext(AuthenticationContext)

  function logarAccount() {
    authentication?.dispatch({ type: "LOGAR" })
  }

  return (
    <Container>
      <h3>Register</h3>
      <IconeInput>
        <i className="fa-solid fa-user"></i>
      </IconeInput>
      <input
        placeholder="Name"
      />
      <IconeInput>
        <i className="fa-solid fa-envelope"></i>
      </IconeInput>
      <input
        placeholder="Email"
      />
      <IconeInput>
        <i className="fa-solid fa-unlock"></i>
      </IconeInput>
      <input
        placeholder="Password"
        type="password"
      />
      <IconeInput>
        <i className="fa-solid fa-lock"></i>
      </IconeInput>
      <input
        placeholder="Confirm password"
        type="password"
      />
      <ButtonRegister>Register</ButtonRegister>
      <ButtonLogin onClick={logarAccount}>Login</ButtonLogin>
    </Container>
  );
}