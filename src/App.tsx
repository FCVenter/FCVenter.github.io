// App.tsx

import React, { useState, useEffect, useRef } from "react";
import { Tabs } from "@rewind-ui/core";
import { getThemeClasses } from "./theme/themeConfig";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import EducationSection from "./components/EducationSection";
import IntroSection from "./components/IntroSection";
import FeedbackSection from "./components/FeedbackSection";
import HobbiesSection from "./components/HobbiesSection";
import RoadmapSection from "./components/RoadmapSection";
import SkillsChart from "./components/SkillsChart";
import CaseStudiesSection from "./components/CaseStudiesSection";

const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const classes = getThemeClasses(theme);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Define refs for each tab
  const portfolioTabRef = useRef<HTMLButtonElement>(null);
  const aboutMeTabRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={`flex min-h-screen ${classes.background}`}>
      {/* Main Content */}
      <div className="flex-1 w-full">
        {/* Hero Section (Outside Tabs) */}
        <HeroSection theme={theme} toggleTheme={toggleTheme} />

        {/* Tabs Component */}
        <Tabs
          defaultTab="Portfolio-tab"
          color="purple"
          fullWidth
          className="p-4"
          aria-label="Main Navigation Tabs"
        >
          <Tabs.List className={`${classes.background} rounded-lg p-2`}>
            <Tabs.Tab
              ref={portfolioTabRef}
              anchor="Portfolio-tab"
              className={`px-4 py-2 rounded-lg ${classes.text} ${classes.hover}`}
              aria-controls="portfolio-content"
            >
              Portfolio
            </Tabs.Tab>
            <Tabs.Tab
              ref={aboutMeTabRef}
              anchor="About-me-tab"
              className={`px-4 py-2 rounded-lg ${classes.text} ${classes.hover}`}
              aria-controls="about-me-content"
            >
              About Me
            </Tabs.Tab>
          </Tabs.List>

          {/* Portfolio Tab Content */}
          <Tabs.Content
            anchor="Portfolio-tab"
            className={`${classes.typography.marginBottom.large}`}
            id="portfolio-content"
            role="tabpanel"
            aria-labelledby="Portfolio-tab"
          >
            <div id="education">
              <EducationSection theme={theme} />
            </div>
            <div id="skills">
              <SkillsSection theme={theme} />
            </div>
            <div id="skills-chart">
              <SkillsChart theme={theme} />
            </div>
            <div id="projects">
              <ProjectsSection theme={theme} />
            </div>
            <div id="case-studies">
              {/* <CaseStudiesSection theme={theme} /> */}
            </div>
            <div id="contact">
              <ContactSection theme={theme} />
            </div>
            <Footer theme={theme} />
          </Tabs.Content>

          {/* About Me Tab Content */}
          <Tabs.Content
            anchor="About-me-tab"
            className={`${classes.typography.marginBottom.large}`}
            id="about-me-content"
            role="tabpanel"
            aria-labelledby="About-me-tab"
          >
            <div id="about-me">
              <IntroSection theme={theme} />
            </div>
            <div id="hobbies">
              <HobbiesSection theme={theme} />
            </div>
            <div id="roadmap">
              <RoadmapSection theme={theme} />
            </div>
            <div id="feedback">
              <FeedbackSection theme={theme} />
            </div>
          </Tabs.Content>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
