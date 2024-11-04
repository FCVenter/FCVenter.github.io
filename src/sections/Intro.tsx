// src/sections/Intro.tsx
import React from 'react';
import styled from 'styled-components';
import CV from '../assets/FC Venter CV 2024.pdf'; // Replace with your CV path

const IntroContainer = styled.section`
  background-image: url('../Assets/Me.jpg');
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  padding: 100px 20px;

  @media (max-width: 768px) {
    padding: 80px 15px;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;

const NameTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const DownloadCVButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #000;
  padding: 15px 25px;
  border-radius: 5px;
  font-size: 1.2em;

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
  <IntroContainer>
    <NameTitle>FC Venter</NameTitle>
    <DownloadCVButton href={CV} download>
      Download My CV
    </DownloadCVButton>
  </IntroContainer>
);

export default Intro;
