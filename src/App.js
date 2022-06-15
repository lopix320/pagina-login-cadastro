import React from "react";
import Login from "./conteiner/Login";
import { LoginProvider } from "./contexts/Provider";

function App() {
  return (
    <LoginProvider>
      <Login />
    </LoginProvider>
  );
}

export default App;
