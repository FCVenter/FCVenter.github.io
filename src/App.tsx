import React, { useState, useEffect } from "react";
import { Button, Tabs } from "@rewind-ui/core";
import { getThemeClasses } from "./theme/themeConfig";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import EducationSection from "./components/EducationSection";
import IntroSection from "./components/IntroSection";
import FeedbackSection from "./components/FeedbackSection";
import GallerySection from "./components/GallerySection";
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

  return (
    <div
      className={`min-h-screen ${classes.background} ${classes.text} ${classes.transition}`}
    >
      <HeroSection theme={theme} toggleTheme={toggleTheme} />

      <Tabs defaultTab="Portfolio-tab" color="purple" fullWidth className="p-4">
        <Tabs.List className={`${classes.background} rounded-lg p-2`}>
          <Tabs.Tab
            anchor="Portfolio-tab"
            className={`px-4 py-2 rounded-lg ${classes.text} ${classes.hover}`}
          >
            Portfolio
          </Tabs.Tab>
          <Tabs.Tab
            anchor="About-me-tab"
            className={`px-4 py-2 rounded-lg ${classes.text} ${classes.hover}`}
          >
            About Me
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Content
          anchor="Portfolio-tab"
          className={classes.typography.marginBottom.large}
        >
          <SkillsSection theme={theme} />
          <EducationSection theme={theme} />
          <SkillsChart theme={theme} />
          <ProjectsSection theme={theme} />
          <CaseStudiesSection theme={theme} />
          <ContactSection theme={theme} />
          <Footer theme={theme} />
        </Tabs.Content>

        <Tabs.Content
          anchor="About-me-tab"
          className={classes.typography.marginBottom.large}
        >
          <div className="space-y-8 p-6">
            <IntroSection theme={theme} />
            <RoadmapSection theme={theme} />
            <GallerySection theme={theme} />
            <FeedbackSection theme={theme} />
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
};

export default App;
