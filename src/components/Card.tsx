// src/components/Card.tsx
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  content: React.ReactNode;
}

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  flex: 1;
  min-width: 250px;
  max-width: 400px;

  @media (max-width: 768px) {
      font-size: 0.9em;
    }

  @media (max-width: 480px) {
      font-size: 0.8em;
    }
`;

const CardTitle = styled.h3`
  margin-top: 0;

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Card: React.FC<CardProps> = ({ title, content }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    {content}
  </CardContainer>
);

export default Card;
