import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
    };
    fonts: {
      main: string;
    };
  }
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary};
  }
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`;
