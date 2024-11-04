// src/App.tsx
import React from 'react';
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

const App: React.FC = () => (
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
  </ThemeProvider>
);

export default App;
