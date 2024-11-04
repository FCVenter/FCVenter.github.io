// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Title>FC Venter</Title>
  </HeaderContainer>
);

export default Header;
