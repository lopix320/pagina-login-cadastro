import React from "react";
import Button from "./Button";
import Input from "./Input";
import { LoginContext, LoginDispatch } from "../contexts/context";
import useLogin from "../hooks/uselogin";
import { setEmail, setPassword, setLogado } from "../contexts/duck/action";
import { VALID_LOGINS, VALID_TOKEN } from "../constants/index";

let styleIndex = {
  borderRadius: "5px",
  border: "none",
  outline: "none",
  boxShadow: "0px 1px 2px -1px black",
  width: "200px",
};
let styleBtn = {
  borderRadius: "2px",
  border: "1px solid",
  boxShadow: "0px 1px 2px -1px black",
};

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
          style={styleIndex}
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
          style={styleIndex}
          disabled={state.logado}
          value={state.password}
          onChange={(event) => dispatch(setPassword(event.target.value))}
          id="senha"
          type="password"
        />
        <br />
        <br />
        <Button style={styleBtn}>Login</Button>
      </form>
      <br />
      <Button
        style={styleBtn}
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
