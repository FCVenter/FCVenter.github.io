// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';
import FlexContainer from './styled/Container';
import Text from './styled/Typography';

const FooterContainer = styled(FlexContainer)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.background};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.large};
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled(Text).attrs({ variant: 'p' })`
  color: ${({ theme }) => theme.colors.background};
`;

const Footer: React.FC = () => (
  <FooterContainer as="footer">
    <FooterText>&copy; {new Date().getFullYear()} FC Venter. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
