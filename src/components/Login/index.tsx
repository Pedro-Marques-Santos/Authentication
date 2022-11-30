import { OutherLogin } from "../OutherLogin";
import { ButtonLogin, ButtonRegister, Container, IconeInput, TagOr } from "./styles";

export function Login() {

  function logarAccount() {
    console.log('aqui')
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
      />
      <h6>Forgot password?</h6>
      <ButtonLogin onClick={logarAccount}>Login</ButtonLogin>
      <TagOr>
        <hr />
        <h5>Or</h5>
        <hr />
      </TagOr>
      <OutherLogin />
      <h2>Have no account yet?</h2>
      <ButtonRegister>Register</ButtonRegister>
    </Container>
  );
}