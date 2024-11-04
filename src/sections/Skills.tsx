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
            <li>Python</li>
            <li>C#</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Pascal</li>
            <li>CSS/HTML</li>
          </ul>
        }
      />
      <Card
        title="Frameworks"
        content={
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>ASP.NET</li>
            <li>React Native</li>
            <li>Flutter</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>PyTest</li>
          </ul>
        }
      />
      <Card
        title="Technologies"
        content={
          <ul>
            <li>PostgreSQL</li>
            <li>SQL Server</li>
            <li>Docker</li>
            <li>GitLab CI</li>
            <li>Azure</li>
            <li>Git/GitHub</li>
            <li>Qiskit</li>
            <li>TensorFlow</li>
          </ul>
        }
      />
      <Card
        title="Soft Skills"
        content={
          <ul>
            <li>Problem-Solving</li>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Time management</li>
            <li>Attention to Detail</li>
            <li>Creativity</li>
            <li>Critical Thinking</li>
            <li>Patience and Perseverance</li>
            <li>Empathy</li>
          </ul>
        }
      />
    </CardsWrapper>
  </SkillsContainer>
);

export default Skills;
