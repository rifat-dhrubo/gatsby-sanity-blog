import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Theme } from "./color";

const GlobalStyle: FC = ({ children }) => {
  return (
    <Wrapper>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            line-height: 1.6;
          }

          body {
            margin: 0;
            font-family: "Roboto", sans-serif, -apple-system, BlinkMacSystemFont,
              "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
              "Droid Sans", "Helvetica Neue", sans-serif;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background: #f8f5f2;
          }

          html {
            --scrollbarBG: #364f6b;
            --thumbBG: #fc5185;
            scrollbar-width: thin;
            scrollbar-color: var(--thumbBG) var(--scrollbarBG);
          }
          body::-webkit-scrollbar {
            width: 12px;
          }
          body {
            scrollbar-color: var(--thumbBG) var(--scrollbarBG);
          }
          body::-webkit-scrollbar-track {
            background: var(--scrollbarBG);
          }
          body::-webkit-scrollbar-thumb {
            background-color: var(--thumbBG);
            border-radius: 6px;
          }
          body::-webkit-scrollbar-thumb:hover {
            background: #e8baa3;
          }

          input {
            font-family: "Roboto", sans-serif, -apple-system, BlinkMacSystemFont,
              "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
              "Droid Sans", "Helvetica Neue", sans-serif;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }

          ::selection {
            color: #fff;
            background: #fc5185;
          }

          a {
            text-decoration: none;
            font-weight: 700;
            color: inherit;
          }

          p {
            margin: 0px;
            padding: 0px;
            border: 0px;
            vertical-align: baseline;
          }

          ul {
            margin: 0;
          }

          li {
            list-style: none;
          }

          button {
            background: transparent;
            border: none;
            color: inherit;
            font-family: inherit;
            cursor: pointer;
          }
        `}
      />
      <Nav />
      {children}
      <Footer />
    </Wrapper>
  );
};

type StyledProps = {
  theme?: Theme; // implicit as typescript does not read the theme frm provider
};

const Wrapper = styled.div<StyledProps>`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.darkerBlue};
  color: ${(props) => props.theme.colors.white};
`;

export default GlobalStyle;
