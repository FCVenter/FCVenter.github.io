// src/components/Navbar.tsx
import React from 'react';
import styled from 'styled-components';
import FlexContainer from './styled/Container';
import NavLink from './styled/NavLink';

// Navbar Container
const NavbarContainer = styled(FlexContainer)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.2rem 2.4rem; /* 19.2px 38.4px */
  z-index: 1000;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Blob Background
const BlobBackground = styled(FlexContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1.5rem; /* 24px */
  padding: 0.75rem 1.5rem; /* 12px 24px */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 2rem; /* 16px 32px */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 1.25rem 2.5rem; /* 20px 40px */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 1.5rem 3rem; /* 24px 48px */
  }
`;

// Navigation Links Container
const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin: 0 0.75rem; /* 12px */
  }

  /* Responsive Font Sizes */
  font-size: 1.2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.8rem;
  }
`;

const Navbar: React.FC = () => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Optionally, update the URL hash without jumping
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <NavbarContainer aria-label="Main Navigation">
      <BlobBackground>
        <NavLinks>
          <li>
            <NavLink
              href="#intro"
              onClick={(e) => handleScroll(e, 'intro')}
              aria-label="Navigate to Home section"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#skills"
              onClick={(e) => handleScroll(e, 'skills')}
              aria-label="Navigate to Skills section"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#education"
              onClick={(e) => handleScroll(e, 'education')}
              aria-label="Navigate to Education section"
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              aria-label="Navigate to Projects section"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              aria-label="Navigate to Contact section"
            >
              Contact
            </NavLink>
          </li>
        </NavLinks>
      </BlobBackground>
    </NavbarContainer>
  );
};

export default Navbar;
