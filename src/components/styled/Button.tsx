// src/components/styled/Button.tsx
import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'success';
}

const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
        return theme.colors.secondary;
      case 'accent':
        return theme.colors.accent;
      case 'danger':
        return theme.colors.danger;
      case 'success':
        return theme.colors.success;
      case 'primary':
      default:
        return theme.colors.primary;
    }
  }};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover,
  &:focus {
    background-color: ${({ theme, variant }) => {
      switch (variant) {
        case 'secondary':
          return theme.colors.background;
        case 'accent':
          return theme.colors.accent; // Slightly darker accent
        case 'danger':
          return theme.colors.danger; // Darker danger
        case 'success':
          return theme.colors.success; // Darker success
        case 'primary':
        default:
          return theme.colors.primary; // Darker primary
      }
    }};
    transform: translateY(-2px);
    outline: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }
`;

export default Button;
