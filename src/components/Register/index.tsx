/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../context/authentication";
import { ButtonLogin, ButtonRegister, Container, IconeInput, Error } from "./styles";

import validator from "validator";
import { AlertRegisterSuccess } from "../AlertRegisterSuccess";
import { AlertRegisterError } from "../AlertRegisterError";

interface ResponseCreate {
  message?: string;
}

export function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfimation] = useState('');

  const [alertError, setAlertError] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  const [errorEMail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('')
  const [errorPConfimation, setErrorPConfimation] = useState('');

  function invalidName(name: string) {
    if (!name) {
      setErrorName('name')
    }
    if (name) {
      setErrorName('');
    }
  }

  function invalidEmail(emailState: boolean) {
    if (!emailState) {
      setErrorEmail('email');
    }
    if (emailState) {
      setErrorEmail('');
    }
  }

  function invalidPassword(password: string) {
    if (!password) {
      setErrorPassword('password');
    }
    if (password) {
      setErrorPassword('');
    }
  }

  function invalidCPassword(passwordConfirmation: string) {
    if (password !== passwordConfirmation || passwordConfirmation === '') {
      setErrorPConfimation('pconfimation');
    }
    if (password === passwordConfirmation && passwordConfirmation !== '') {
      setErrorPConfimation('');
    }
  }

  async function handleRegister() {

    let emailState = false;

    if (validator.isEmail(email)) {
      emailState = true;
    }

    invalidName(name);

    invalidEmail(emailState);

    invalidPassword(password);

    invalidCPassword(passwordConfirmation);

    if (emailState && password && name && password === passwordConfirmation && passwordConfirmation !== '') {

      let data = {
        name: name,
        email: email,
        password: password
      }

      let response = await fetch('http://localhost:3333/createUser', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (response.status === 201) {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfimation('');
        setAlertSuccess(true);
        setTimeout(() => {
          setAlertSuccess(false);
        }, 4900);
      }

      if (response.status === 401) {
        let result = await response.json() as ResponseCreate;
        console.log(result.message)
        setAlertError(true)
        setTimeout(() => {
          setAlertError(false);
        }, 4900);
      }

    }
  }

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
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <h6>
        <Error
          isActive={errorName === 'name'}
        >Name needs more characters</Error>
      </h6>
      <IconeInput>
        <i className="fa-solid fa-envelope"></i>
      </IconeInput>
      <input
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <h6>
        <Error
          isActive={errorEMail === 'email'}
        >E-mail doest not exist</Error>
      </h6>
      <IconeInput>
        <i className="fa-solid fa-unlock"></i>
      </IconeInput>
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <h6>
        <Error
          isActive={errorPassword === 'password'}
        >Password needs more characters</Error>
      </h6>
      <IconeInput>
        <i className="fa-solid fa-lock"></i>
      </IconeInput>
      <input
        placeholder="Confirm password"
        type="password"
        value={passwordConfirmation}
        onChange={event => setPasswordConfimation(event.target.value)}
      />
      <h6>
        <Error
          isActive={errorPConfimation === 'pconfimation'}
        >invalid confirmation password</Error>
      </h6>
      <ButtonRegister onClick={handleRegister}>Register</ButtonRegister>
      <ButtonLogin onClick={logarAccount}>Login</ButtonLogin>
      <AlertRegisterSuccess alertSuccess={alertSuccess} />
      <AlertRegisterError alertError={alertError} />
    </Container>
  );
}