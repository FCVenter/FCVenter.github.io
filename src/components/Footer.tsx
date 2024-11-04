// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} FC Venter. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
