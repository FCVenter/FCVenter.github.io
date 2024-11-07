import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      danger: string;
      success: string
    };
    fonts: {
      main: string;
    };
    breakpoints: {
      mobile: '480px';
      tablet: '768px';
      laptop: '1024px';
      desktop: '1440px';
    };
    fontSizes: {
      mobile: '1.2rem';    // 19.2px
      tablet: '1.4rem';    // 22.4px
      laptop: '1.6rem';    // 25.6px
      desktop: '1.8rem';   // 28.8px
    };
    spacing: {
      small: '0.5rem';     // 8px
      medium: '1rem';      // 16px
      large: '1.5rem';     // 24px
      xLarge: '2rem';      // 32px
    };
    // Add more theme properties as needed
  }
}

export const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base Styles */
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Accessible Focus States */
  a:focus, button:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent};
  }

  /* Responsive Images */
  img, video {
    max-width: 100%;
    height: auto;
  }
`;
