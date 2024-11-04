// src/components/Navbar.tsx
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  padding: 10px 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const BlobBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin: 0 15px;

    a {
      color: ${({ theme }) => theme.colors.background};
      text-decoration: none;
      font-weight: bold;
      position: relative;
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

const Navbar: React.FC = () => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer>
      <BlobBackground>
        <NavLinks>
          <li>
            <a href="#intro" onClick={(e) => handleScroll(e, 'intro')}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>
              Skills
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => handleScroll(e, 'education')}>
              Education
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
              Contact
            </a>
          </li>
        </NavLinks>
      </BlobBackground>
    </NavbarContainer>
  );
};

export default Navbar;
