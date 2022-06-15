import React from "react";
import { INITIAL_STATE } from "./duck/reducer";

export const LoginContext = React.createContext(INITIAL_STATE);
export const LoginDispatch = React.createContext();
