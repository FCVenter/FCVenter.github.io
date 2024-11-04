// src/sections/Skills.tsx
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const SkillsContainer = styled.section`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Heading = styled.h2`
  text-align: center;
`;

const Skills: React.FC = () => (
  <SkillsContainer>
    <Heading>Skills</Heading>
    <CardsWrapper>
      <Card
        title="Languages"
        content={
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            {/* Add all languages */}
          </ul>
        }
      />
      <Card
        title="Frameworks"
        content={
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            {/* Add all frameworks */}
          </ul>
        }
      />
      <Card
        title="Technologies"
        content={
          <ul>
            <li>Docker</li>
            <li>Azure</li>
            <li>Firebase</li>
            {/* Add all technologies */}
          </ul>
        }
      />
      <Card
        title="Soft Skills"
        content={
          <ul>
            <li>Team Leadership</li>
            <li>Communication</li>
            <li>Problem-Solving</li>
            {/* Add all soft skills */}
          </ul>
        }
      />
    </CardsWrapper>
  </SkillsContainer>
);

export default Skills;
