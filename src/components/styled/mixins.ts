// src/components/styled/mixins.ts
import { css } from 'styled-components';

export const respondTo = (breakpoint: keyof typeof props.theme.breakpoints, props: any) => {
  return (styles: TemplateStringsArray | string) => css`
    @media (min-width: ${(props: any) => props.theme.breakpoints[breakpoint]}) {
      ${styles}
    }
  `;
};
