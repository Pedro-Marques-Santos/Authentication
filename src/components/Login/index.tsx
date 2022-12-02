import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication";
import { OutherLogin } from "../OutherLogin";
import { ButtonLogin, ButtonRegister, Container, IconeInput, TagOr } from "./styles";

export function Login() {

  const authentication = useContext(AuthenticationContext)

  function RegisterAccount() {
    authentication?.dispatch({ type: "REGISTER" })
  }

  return (
    <Container>
      <h3>Welcome</h3>
      <IconeInput>
        <i className="fa-solid fa-envelope"></i>
      </IconeInput>
      <input
        placeholder="Email"
      />
      <IconeInput>
        <i className="fa-solid fa-lock"></i>
      </IconeInput>
      <input
        placeholder="Password"
        type="password"
      />
      <h6>Forgot password?</h6>
      <ButtonLogin >Login</ButtonLogin>
      <TagOr>
        <hr />
        <h5>Or</h5>
        <hr />
      </TagOr>
      <OutherLogin />
      <h2>Have no account yet?</h2>
      <ButtonRegister onClick={RegisterAccount}>Register</ButtonRegister>
    </Container>
  );
}