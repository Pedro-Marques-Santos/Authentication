import { ButtonRegister, Container, IconeInput } from "./styles";

export function Register() {
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
      />
      <IconeInput>
        <i className="fa-solid fa-lock"></i>
      </IconeInput>
      <input
        placeholder="Confirm password"
      />
      <ButtonRegister>Register</ButtonRegister>
    </Container>
  );
}