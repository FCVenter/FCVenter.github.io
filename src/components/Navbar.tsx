// src/components/Navbar.tsx
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }

  @media (max-width: 480px) {
    padding: 10px 10px;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0;

  li {
    margin: 0 15px;

    @media (max-width: 768px) {
      margin: 0 10px;
    }

    @media (max-width: 480px) {
      margin: 0 5px;
    }

    @media (max-width: 768px) {
      font-size: 0.9em;
    }

    @media (max-width: 480px) {
      font-size: 0.8em;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;
  }
`;

const Navbar: React.FC = () => (
  <NavbarContainer>
    <NavLinks>
      <li>
        <a href="#intro">Home</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;
