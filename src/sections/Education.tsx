// src/sections/Education.tsx
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Text from '../components/styled/Typography';

const EducationContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xLarge} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};

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

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Education: React.FC = () => (
  <EducationContainer>
    <Heading>Education</Heading>
    <CardsWrapper>
      <Card
        title="B.Sc in Information Technology"
        content={
          <>
            <Text>North-West University</Text>
            <Text>2022-2024</Text>
          </>
        }
      />
      <Card
        title="B.Sc in Computer Science and Information Systems"
        content={
          <>
            <Text>North-West University</Text>
            <Text>2025</Text>
          </>
        }
      />
      <Card
        title="QBronze Quantum Computing Diploma"
        content={
          <>
            <Text>QBronze</Text>
            <Text>2023</Text>
          </>
        }
      />
    </CardsWrapper>
  </EducationContainer>
);

export default Education;
