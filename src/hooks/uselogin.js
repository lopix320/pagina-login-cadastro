import React from "react";
import { LoginContext, LoginDispatch } from "../contexts/context";

const useLogin = () => {
  const context = React.useContext(LoginContext);
  const dispatch = React.useContext(LoginDispatch);
  return [context, dispatch];
};

export default useLogin;
