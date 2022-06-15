import * as t from "./types";

export const INITIAL_STATE = {
  email: "",
  password: "",
  logado: false,
};

export function reducer(state, { payload, type }) {
  switch (type) {
    case t.EMAIL: {
      return {
        ...state,
        email: payload,
      };
    }
    case t.PASSWORD: {
      return {
        ...state,
        password: payload,
      };
    }
    case t.LOGADO: {
      return {
        ...state,
        logado: payload,
      };
    }
    default: {
      return state;
    }
  }
}
