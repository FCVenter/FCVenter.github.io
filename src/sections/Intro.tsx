// src/sections/Intro.tsx
import React from 'react';
import styled from 'styled-components';
import CV from '../assets/FC Venter CV 2024.pdf'; // Replace with your CV path
import backGroundImage from '../assets/mbr-2-1920x1280.jpg';
import Parallax from '../components/Parallax';

const IntroSection = styled.section`
  position: relative;
  height: 100vh; /* Full viewport height */
  width: 100%;
  overflow: hidden;
`;

const IntroContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* Optional: Add a semi-transparent background for better text visibility */
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const NameTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #fff; /* Ensure text is visible over the background image */

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const DownloadCVButton = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: #000;
  padding: 15px 25px;
  border-radius: 5px;
  font-size: 1.2em;
  text-decoration: none;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 1em;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9em;
  }
`;

const Intro: React.FC = () => (
  <IntroSection>
    <Parallax src={backGroundImage} alt="FC Venter parallax background" />
    <IntroContainer>
      <NameTitle>FC Venter</NameTitle>
      <DownloadCVButton href={CV} target="_blank" rel="noopener noreferrer">
        View My CV
      </DownloadCVButton>
    </IntroContainer>
  </IntroSection>
);

export default Intro;
