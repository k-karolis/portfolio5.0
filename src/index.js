import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import Main from "./Pages/MainPage/Main";
import ContextProvider from "./components/ContextProvider/Provider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Main />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
