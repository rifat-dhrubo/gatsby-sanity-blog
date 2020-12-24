/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from './src/styles/themeContext';
import GlobalStyle from './src/styles/GlobalStyle';

export function wrapPageElement({ element, props }) {
  return <GlobalStyle {...props}>{element}</GlobalStyle>;
}

export function wrapRootElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>;
}
