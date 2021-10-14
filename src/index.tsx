import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/globalStyle";
import { DefaultTheme, ThemeProvider } from "styled-components";
import mainTheme from "./theme/theme";

import "@fontsource/montserrat";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme as DefaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
