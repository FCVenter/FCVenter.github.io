// src/sections/Socials.tsx
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialsContainer = styled.section`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const Heading = styled.h2`
  text-align: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0 15px;
    font-size: 2em;

    @media (max-width: 768px) {
      margin: 0 10px;
      font-size: 1.8em;
    }

    @media (max-width: 480px) {
      margin: 0 8px;
      font-size: 1.5em;
  }
`;

const Socials: React.FC = () => (
  <SocialsContainer>
    <Heading>Follow My Socials</Heading>
    <IconsWrapper>
      <a href="https://linkedin.com/in/fc-venter-b63b61268" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/FCVenter" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://instagram.com/fc_venter" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </IconsWrapper>
  </SocialsContainer>
);

export default Socials;
