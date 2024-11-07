// src/App.tsx
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme'; // Adjusted import path based on standard structure
import { GlobalStyles } from './styles/GlobalStyles'; // Adjusted import path
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Socials from './sections/Socials';
import Footer from './components/Footer';
import { TransparencyProvider, TransparencyContext } from './contexts/TransparencyContext';
import styled from 'styled-components';

const AppContent: React.FC = () => {

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Intro />
      <Skills />
      <Education />
      <Projects />
      <Socials />
      <Footer />
    </>
  );
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <TransparencyProvider>
      <AppContent />
    </TransparencyProvider>
  </ThemeProvider>
);

export default App;
