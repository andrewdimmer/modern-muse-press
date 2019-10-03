import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WimpySteve from "./WimpySteve";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/styles";
import { THEME } from "./Styles/theme";

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <WimpySteve />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
