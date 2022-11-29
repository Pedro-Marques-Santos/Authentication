import { OutherLogin } from "../OutherLogin";
import { ButtonLogin, ButtonRegister, Container, Input, TagOr } from "./styles";

export function Login() {
  return (
    <Container>
      <h3>Welcome</h3>
      <Input>Email</Input>
      <Input>Password</Input>
      <h6>Forgot password?</h6>
      <ButtonLogin>Login</ButtonLogin>
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