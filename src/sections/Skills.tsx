// src/sections/Skills.tsx
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Text from '../components/styled/Typography';
import FlexContainer from '../components/styled/Container';
import backGroundImage from '../assets/ram.jpg'; // Ensure you have a suitable background image

// 1. Styled component for the entire Skills section with parallax background
const SkillsSection = styled.section`
  position: relative;
  min-height: 100vh; /* Allows the section to expand if content requires more space */
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
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  /* Disable parallax on smaller screens */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-attachment: scroll;
  }
`;


// 2. Styled component for the container holding the content with semi-transparent background
const SkillsContainer = styled(FlexContainer)`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  text-align: center;

  background: rgba(0, 0, 0, 0.5);
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 0.625rem;
  z-index: 2;

  width: 100%;
  margin: 0; /* Ensure no extra margins at the bottom */

  /* Eliminate any possible bottom padding or margin from parallax */
  padding-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;



// 3. Styled component for the heading
const Heading = styled(Text).attrs({ variant: 'h2' })`
  text-align: left; /* Left-align the heading */
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.primary}; /* Use theme's primary color */
`;

// 4. Styled component for wrapping the skill cards
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Align cards to the start (left) */
  gap: ${({ theme }) => theme.spacing.large}; /* Space between cards */
  z-index: 2; /* Ensure it sits above the overlay */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

// 5. Styled component for the lists inside cards
const List = styled.ul`
  list-style-type: disc;
  text-align: left;
  padding-left: 1.25rem; /* 20px */
  color: ${({ theme }) => theme.colors.background}; 

  li {
    margin-bottom: 0.5rem;
  }
`;

const Skills: React.FC = () => (
  <SkillsSection>
    <SkillsContainer>
      <Heading>Skills</Heading>
      <CardsWrapper>
        <Card
          title="Languages"
          content={
            <List>
              <li>Python</li>
              <li>C#</li>
              <li>C/C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Pascal</li>
              <li>CSS/HTML</li>
            </List>
          }
        />
        <Card
          title="Frameworks"
          content={
            <List>
              <li>React</li>
              <li>Angular</li>
              <li>ASP.NET</li>
              <li>React Native</li>
              <li>Flutter</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>PyTest</li>
            </List>
          }
        />
        <Card
          title="Technologies"
          content={
            <List>
              <li>PostgreSQL</li>
              <li>SQL Server</li>
              <li>Docker</li>
              <li>GitLab CI</li>
              <li>Azure</li>
              <li>Git/GitHub</li>
              <li>Qiskit</li>
              <li>TensorFlow</li>
            </List>
          }
        />
        <Card
          title="Soft Skills"
          content={
            <List>
              <li>Problem-Solving</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
              <li>Time Management</li>
              <li>Attention to Detail</li>
              <li>Creativity</li>
              <li>Critical Thinking</li>
              <li>Patience and Perseverance</li>
              <li>Empathy</li>
            </List>
          }
        />
      </CardsWrapper>
    </SkillsContainer>
  </SkillsSection>
);

export default Skills;
