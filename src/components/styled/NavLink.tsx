// src/components/styled/NavLink.tsx
import styled from 'styled-components';

interface NavLinkProps {
  href: string;
}

const NavLink = styled.a<NavLinkProps>`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  font-weight: bold;
  position: relative;
  transition: color 0.3s, transform 0.3s;
  font-size: ${({ theme }) => theme.fontSizes.mobile};
  padding: 0.6rem 1.2rem;
  border-radius: 0.3rem;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.tablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.laptop};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.desktop};
  }
`;

export default NavLink;
