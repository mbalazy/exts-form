import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    padding: 0px;
    margin: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  a {
    text-decoration: none
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
