import React from "react";
import Button from "./Button";
import Input from "./Input";
import { LoginContext, LoginDispatch } from "../contexts/context";
import useLogin from "../hooks/uselogin";
import { setEmail, setPassword, setLogado } from "../contexts/duck/action";
import { VALID_LOGINS, VALID_TOKEN } from "../constants/index";

const Form = () => {
  const [state, dispatch] = useLogin();
  const { email, password } = VALID_LOGINS;
  function handleSubmit(e) {
    e.preventDefault();
    if (state.email == email && state.password == password) {
      window.localStorage.setItem("token", VALID_TOKEN);
      window.alert("Logado com sucesso!");
      dispatch(setLogado());
    } else {
      window.alert("Email ou senha estão incorretos!");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="email">Email:</label>
        <br />
        <Input
          disabled={state.logado}
          value={state.email}
          onChange={(event) => dispatch(setEmail(event.target.value))}
          id="email"
          type="text"
        />
        <br />
        <br />
        <label for="senha">Senha:</label>
        <br />
        <Input
          disabled={state.logado}
          value={state.password}
          onChange={(event) => dispatch(setPassword(event.target.value))}
          id="senha"
          type="password"
        />
        <br />
        <br />
        <Button>Login</Button>
      </form>
      <br />
      <Button
        onClick={() => {
          window.alert("Deslogado!");
          window.localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default Form;
