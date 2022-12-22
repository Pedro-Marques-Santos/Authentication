import { useContext, useState } from "react";
import { AuthenticationContext } from "../../context/authentication";
import { OutherLogin } from "../OutherLogin";
import { ButtonLogin, ButtonRegister, Container, IconeInput, TagOr, Error, ForgetPassword } from "./styles";

import validator from "validator";
import { useNavigate } from "react-router-dom";


interface ResponseUser {
  token?: string;
  name?: string;
  message?: string;
}

export function Login() {

  const navegate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [messageError, setMessageError] = useState<string | undefined>('');
  const [errorState, setErrorState] = useState(false);

  function invalidEmail(emailState: boolean) {
    if (!emailState) {
      setMessageError('invalid email or password');
      setErrorState(true);
      setEmail('');
      setPassword('');
    }
  }

  function invalidPassword(password: string) {
    if (!password) {
      setMessageError('invalid email or password');
      setErrorState(true);
      setEmail('');
      setPassword('');
    }
  }

  async function handleLogin() {

    let emailState = false;

    if (validator.isEmail(email)) {
      emailState = true;
    }

    invalidEmail(emailState);

    invalidPassword(password);

    if (emailState && password) {

      setErrorState(false);

      let data = {
        email: email,
        password: password
      }

      let response = await fetch('http://localhost:3333/loginUser', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      let result = await response.json() as ResponseUser;

      if (response.status === 401) {
        setMessageError('invalid email or password');
        setErrorState(true);
      }

      if (response.status === 200) {
        console.log(result)
        setEmail('');
        setPassword('');
        navegate('/profile', {
          state: {
            user: {
              name: result.name,
              token: result.token
            }
          }
        })
      }

    }

  }

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
        onChange={event => setEmail(event.target.value)}
        placeholder="Email"
        value={email}
      />
      <IconeInput>
        <i className="fa-solid fa-lock"></i>
      </IconeInput>
      <input
        onChange={event => setPassword(event.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <h6>
        <Error errorState={errorState}>{messageError}</Error>
        <ForgetPassword>Forget password?</ForgetPassword>
      </h6>
      <ButtonLogin onClick={handleLogin} >Login</ButtonLogin>
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