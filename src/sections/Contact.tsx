// src/sections/Contact.tsx
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 50px 20px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

const ContactDetails = styled.div`
  text-align: center;

  p {
    font-size: 1.2em;

    @media (max-width: 768px) {
      font-size: 1.1em;
    }

    @media (max-width: 480px) {
      font-size: 1em;
    }
  }
`;

const Heading = styled.h2`
  text-align: center;
`;

const Contact: React.FC = () => (
  <ContactContainer>
    <Heading>Contact Me</Heading>
    <ContactDetails>
      <p>Phone: +27 82 729 1986</p>
      <p>Email: fcventer17@gmail.com</p>
      <p>Location: Potchefstroom, South Africa</p>
    </ContactDetails>
  </ContactContainer>
);

export default Contact;
