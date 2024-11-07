// src/components/styled/Typography.tsx
import styled from 'styled-components';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  color?: string;
}

const Text = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  color: ${({ color, theme }) => color || theme.colors.background};
  font-size: ${({ variant, theme }) => {
    switch (variant) {
      case 'h1':
        return 'clamp(2rem, 5vw + 1rem, 3rem)';
      case 'h2':
        return 'clamp(1.75rem, 4vw + 1rem, 2.5rem)';
      case 'h3':
        return 'clamp(1.5rem, 3vw + 1rem, 2rem)';
      case 'p':
      default:
        return 'clamp(1rem, 2vw + 0.5rem, 1.2rem)';
    }
  }};
  font-weight: ${({ variant }) => (variant === 'h1' || variant === 'h2' || variant === 'h3') ? 'bold' : 'normal'};
`;

export default Text;
