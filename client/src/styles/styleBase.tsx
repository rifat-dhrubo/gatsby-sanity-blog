import tw, { css } from 'twin.macro';

const stylesBase = css`
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f5f9;
    --text-primary: #475569;
    --text-secondary: #1e293b;
    --color-primary: #e11d48;
  }
  .dark {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #cbd5e1;
    --text-secondary: #ffffff;

    --color-primary: #2563eb;
  }

  body {
    font-family: 'Roboto', sans-serif, -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    --neon-pink: #fc5185;
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
    background: #fc5185;
  }

  input {
    font-family: 'Roboto', sans-serif, -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
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
`;

export default stylesBase;
