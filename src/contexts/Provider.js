import React from "react";
import { LoginContext, LoginDispatch } from "./context";
import { INITIAL_STATE, reducer } from "./duck/reducer";
export const LoginProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  return (
    <LoginContext.Provider value={state}>
      <LoginDispatch.Provider value={dispatch}>
        {children}
      </LoginDispatch.Provider>
    </LoginContext.Provider>
  );
};
