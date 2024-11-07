// src/sections/Socials.tsx
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Text from '../components/styled/Typography';
import FlexContainer from '../components/styled/Container';
import backGroundImage from '../assets/keyboard.jpg'; // Ensure correct path

const SocialsContactWrapper = styled.section`
  position: relative;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.xLarge} ${({ theme }) => theme.spacing.medium};
  background-image: url(${backGroundImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  /* Ensure content is above the overlay */
  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small};
  }
`;

const Heading = styled(Text).attrs({ variant: 'h2' })`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.primary};
`;

const IconsWrapper = styled(FlexContainer)`
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.medium};

  a {
    color: ${({ theme }) => theme.colors.accent};
    margin: ${({ theme }) => theme.spacing.small};
    font-size: 2em;
    transition: color 0.3s, transform 0.3s;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.accent};
      transform: scale(1.1);
      outline: none;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.5em;
      margin: ${({ theme }) => theme.spacing.medium};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      font-size: 3em;
    }
  }
`;

const ContactDetails = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.large};

  p {
    font-size: ${({ theme }) => theme.fontSizes.mobile};
    margin: ${({ theme }) => theme.spacing.small} 0;
    color: ${({ theme }) => theme.colors.primary};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.tablet};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      font-size: ${({ theme }) => theme.fontSizes.laptop};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.desktop};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.accent};
      text-decoration: none;
      outline: none;
    }
  }
`;

const Socials: React.FC = () => (
  <SocialsContactWrapper id="socials-contact">
    <Heading>Follow Me & Contact</Heading>
    <IconsWrapper>
      <a href="https://linkedin.com/in/fc-venter-b63b61268" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com/FCVenter" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://instagram.com/fc_venter" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
    </IconsWrapper>
    <ContactDetails>
      <Text>
        Phone: <a href="tel:+27827291986">+27 82 729 1986</a>
      </Text>
      <Text>
        Email: <a href="mailto:fcventer17@gmail.com">fcventer17@gmail.com</a>
      </Text>
      <Text>Location: Potchefstroom, South Africa</Text>
    </ContactDetails>
  </SocialsContactWrapper>
);

export default Socials;
