import React from "react";
import { setLogado } from "../../contexts/duck/action";
import * as S from "./styled";
import Form from "../../components/Form";
import { VALID_TOKEN } from "../../constants";
import useLogin from "../../hooks/uselogin";

const Login = () => {
  const [_, dispatch] = useLogin();
  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token == VALID_TOKEN) {
      dispatch(setLogado());
      window.alert("Você já esta logado!");
    }
  }, []);
  const color = "green";
  return (
    <S.LoginWrapper>
      <S.Conteiner>
        <S.InputPanel>
          <h1 style={{ marginLeft: "20px" }}>Login</h1>
          <Form />
        </S.InputPanel>
      </S.Conteiner>
    </S.LoginWrapper>
  );
};
export default Login;
