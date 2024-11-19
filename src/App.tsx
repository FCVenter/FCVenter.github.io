import React, { useState, useEffect } from 'react';
import { Button, Tabs } from '@rewind-ui/core';
import { FaSun, FaMoon } from 'react-icons/fa';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EducationSection from './components/EducationSection';
import IntroSection from './components/IntroSection';
import FeedbackSection from './components/FeedbackSection';
import GallerySection from './components/GallerySection';
import HobbiesSection from './components/HobbiesSection';
import RoadmapSection from './components/RoadmapSection';
import SkillsChart from './components/SkillsChart';
import CaseStudiesSection from './components/CaseStudiesSection';


const App = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <HeroSection theme={theme} toggleTheme={toggleTheme} />

      <Tabs
        // defaultTab="Portfolio-tab"
        defaultTab="About-me-tab"
        color="purple"
        fullWidth={true}
        className="p-4"
      >
        <Tabs.List className="bg-gray-200 dark:bg-gray-800 rounded-lg p-2">
          <Tabs.Tab
            anchor="Portfolio-tab"
            className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Portfolio
          </Tabs.Tab>
          <Tabs.Tab
            anchor="About-me-tab"
            className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            About Me
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Content anchor="Portfolio-tab" className="mt-4">
          <SkillsSection theme={theme}/>
          <EducationSection theme={theme}/>
          <ProjectsSection theme={theme}/>
          <ContactSection theme={theme}/>
          <Footer theme={theme}/>
        </Tabs.Content>

        <Tabs.Content anchor="About-me-tab" className="mt-4">
          <div className="space-y-8 p-6">
            <IntroSection theme={theme}/>
            <GallerySection theme={theme}/>
            <HobbiesSection theme={theme}/>
            <SkillsChart theme={theme} />
            <RoadmapSection theme={theme}/>
            <CaseStudiesSection theme={theme}/>
            <FeedbackSection theme={theme}/>
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
};

export default App;
