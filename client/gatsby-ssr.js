/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./src/styles/color";
import GlobalStyle from "./src/styles/GlobalStyle";

export function wrapPageElement({ element, props }) {
  return <GlobalStyle {...props}>{element}</GlobalStyle>;
}

export function wrapRootElement({ element }) {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
}
