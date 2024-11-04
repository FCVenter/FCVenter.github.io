// src/styles/transparentBackground.ts
import { css, DefaultTheme, ThemedStyledProps } from "styled-components";

interface TransparentProps {
  transparent?: boolean;
  backgroundColor: keyof DefaultTheme["colors"];
}

const hexToRgb = (hex: string): string => {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Parse r, g, b values
  let bigint: number;
  if (hex.length === 3) {
    bigint = parseInt(
      hex
        .split("")
        .map((c) => c + c)
        .join(""),
      16
    );
  } else {
    bigint = parseInt(hex, 16);
  }

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
};

// Redefine transparentBackground as an interpolated CSS helper
export const transparentBackground = css<TransparentProps>`
  background-color: ${({ transparent, theme, backgroundColor }) =>
    transparent
      ? `rgba(${hexToRgb(theme.colors[backgroundColor])}, 0.8)` // 80% opacity
      : theme.colors[backgroundColor]};
`;
