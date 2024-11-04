// src/sections/Education.tsx
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const EducationContainer = styled.section`
  padding: 50px 20px;
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

const Education: React.FC = () => (
  <EducationContainer>
    <Heading>Education</Heading>
    <CardsWrapper>
      <Card
        title="B.Sc in Information Technology"
        content={
          <>
            <p>North-West University</p>
            <p>2022-2024</p>
          </>
        }
      />
      <Card
        title="B.Sc in Computer Science and Information Systems"
        content={
          <>
            <p>North-West University</p>
            <p>2025</p>
          </>
        }
      />
      <Card
        title="QBronze Quantum Computing Diploma"
        content={
          <>
            <p>QBronze</p>
            <p>2023</p>
          </>
        }
      />
    </CardsWrapper>
  </EducationContainer>
);

export default Education;
