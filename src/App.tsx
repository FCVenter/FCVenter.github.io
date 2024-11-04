// src/App.tsx
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Socials from './sections/Socials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { TransparencyProvider, TransparencyContext } from './contexts/TransparencyContext';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1001;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const AppContent: React.FC = () => {
  const { transparent, toggleTransparency } = useContext(TransparencyContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <div id="intro">
        <Intro />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="socials">
        <Socials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ToggleButton onClick={toggleTransparency}>
        {transparent ? 'Disable Transparency' : 'Enable Transparency'}
      </ToggleButton>
    </ThemeProvider>
  );
};

const App: React.FC = () => (
  <TransparencyProvider>
    <AppContent />
  </TransparencyProvider>
);

export default App;
