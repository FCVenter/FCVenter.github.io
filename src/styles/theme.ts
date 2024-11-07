// src/styles/theme.ts

import { DefaultTheme } from 'styled-components';



export const theme: DefaultTheme = {
  colors: {
    background: "#000000",
    primary: "#3AFF6D",
    secondary: "#009933",
    accent: "#826cf6",
    text: "#FFFFFF",
    danger: "#dc3545", // For error states
    success: "#28a745", // For success states
  },
  fonts: {
    main: "Roboto, sans-serif",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
  },
  fontSizes: {
    mobile: "1.2rem", // 19.2px
    tablet: "1.4rem", // 22.4px
    laptop: "1.6rem", // 25.6px
    desktop: "1.8rem", // 28.8px
  },
  spacing: {
    small: "0.5rem", // 8px
    medium: "1rem", // 16px
    large: "1.5rem", // 24px
    xLarge: "2rem", // 32px
  },
  // Add more theme properties as needed
};
