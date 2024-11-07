// src/sections/Intro.tsx
import React from 'react';
import styled from 'styled-components';
import CV from '../assets/FC Venter CV 2024.pdf'; // Replace with your CV path
import backGroundImage from '../assets/noctua.jpg';
import Text from '../components/styled/Typography';
import Button from '../components/styled/Button';
import FlexContainer from '../components/styled/Container';

const IntroSection = styled.section`
  position: relative;
  height: 100vh; /* Full viewport height */
  width: 100%;
  overflow: hidden;
  
  /* Parallax Background */
  background-image: url(${backGroundImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  /* Overlay to enhance text readability */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Adjust opacity as needed */
    z-index: 1;
  }
  
  /* Disable parallax on mobile devices */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-attachment: scroll;
  }
`;

const IntroContainer = styled(FlexContainer)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  flex-direction: column;
  align-items: center;

  /* Semi-transparent background for better text visibility */
  background: rgba(0, 0, 0, 0.5);
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 0.625rem; /* 10px */
  z-index: 2; /* Ensure it sits above the overlay */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

const NameTitle = styled(Text).attrs({ variant: 'h1' })`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: #fff; /* Ensure text is visible over the background image */
`;

const Intro: React.FC = () => (
  <IntroSection>
    <IntroContainer>
      <NameTitle>FC Venter</NameTitle>
      <Button
        as="a"
        href={CV}
        target="_blank"
        rel="noopener noreferrer"
        variant="accent"
        aria-label="View my CV"
      >
        View My CV
      </Button>
    </IntroContainer>
  </IntroSection>
);

export default Intro;
