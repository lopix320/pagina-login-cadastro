import * as t from "./types";

export const setEmail = (email) => {
  return {
    type: t.EMAIL,
    payload: email,
  };
};
export const setPassword = (password) => {
  return {
    type: t.PASSWORD,
    payload: password,
  };
};
export const setLogado = () => {
  return {
    type: t.LOGADO,
    payload: true,
  };
};
