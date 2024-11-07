// src/components/Card.tsx
import React from 'react';
import styled from 'styled-components';
import Text from './styled/Typography';

interface CardProps {
  title: string;
  content: React.ReactNode;
}

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0.9375rem; /* 15px */
  padding: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.medium};
  flex: 1;
  min-width: 15.625rem; /* 250px */
  max-width: 25rem;     /* 400px */

  color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.9em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8em;
  }
`;

const CardTitle = styled(Text).attrs({ variant: 'h3' })`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ContentWrapper = styled.div`
  /* Additional styling if needed */
`;

const Card: React.FC<CardProps> = ({ title, content }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <ContentWrapper>{content}</ContentWrapper>
  </CardContainer>
);

export default Card;
