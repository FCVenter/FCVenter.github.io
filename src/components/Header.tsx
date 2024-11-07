// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import FlexContainer from './styled/Container';
import Text from './styled/Typography';

const HeaderContainer = styled(FlexContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.large};
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text).attrs({ variant: 'h2' })`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Header: React.FC = () => (
  <HeaderContainer as="header">
    <Title>FC Venter</Title>
  </HeaderContainer>
);

export default Header;
