// App.tsx
import React, { useState, useEffect, useRef } from "react";
import { Tabs } from "@rewind-ui/core"; // Keep Tabs if still needed
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
import { FaGrav } from "react-icons/fa";
import {
  IoHomeOutline,
  IoSchoolOutline,
  IoBookOutline,
  IoLaptopOutline,
  IoCallOutline,
  IoBodyOutline,
  IoColorPaletteOutline,
  IoAirplaneOutline,
  IoBulbOutline,
  IoThumbsUpOutline,
} from "react-icons/io5";

// Import the custom MakeSidebar component
import MakeSidebar from "./components/Sidebar/MakeSidebar"; // Adjust the path as necessary

const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const classes = getThemeClasses(theme);
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Define refs for each tab
  const portfolioTabRef = useRef<HTMLButtonElement>(null);
  const aboutMeTabRef = useRef<HTMLButtonElement>(null);

  // Mapping of sections to their respective tabs
  const sectionToTabMap: { [key: string]: string | null } = {
    hero: null, // Hero is outside tabs
    education: "Portfolio-tab",
    skills: "Portfolio-tab",
    "skills-chart": "Portfolio-tab",
    projects: "Portfolio-tab",
    "case-studies": "Portfolio-tab",
    contact: "Portfolio-tab",
    aboutMe: "About-me-tab",
    roadmap: "About-me-tab",
    feedback: "About-me-tab",
    hobbies: "About-me-tab",
  };

  // Handler for sidebar link clicks
  const handleSidebarLink = (sectionId: string) => {
    const tab = sectionToTabMap[sectionId];
    if (tab === "Portfolio-tab") {
      portfolioTabRef.current?.click();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure tab content is rendered
    } else if (tab === "About-me-tab") {
      aboutMeTabRef.current?.click();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (tab === null) {
      // For sections outside tabs (e.g., Hero)
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`flex min-h-screen ${classes.background}`}>
      <MakeSidebar expanded={expanded} setExpanded={setExpanded}>
        <MakeSidebar.NavSection title="Portfolio">
          <MakeSidebar.NavItem
            icon={<IoHomeOutline />}
            text="Dashboard"
            onClick={() => handleSidebarLink("hero")}
          />
          <MakeSidebar.NavItem
            icon={<IoSchoolOutline />}
            text="Education"
            onClick={() => handleSidebarLink("education")}
          />
          <MakeSidebar.NavItem
            icon={<IoBulbOutline />}
            text="Skills"
            onClick={() => handleSidebarLink("skills")}
          />
          <MakeSidebar.NavItem
            icon={<IoLaptopOutline />}
            text="Projects"
            onClick={() => handleSidebarLink("projects")}
          />
          <MakeSidebar.NavItem
            icon={<IoBookOutline />}
            text="Case Studies"
            onClick={() => handleSidebarLink("case-studies")}
          />
          <MakeSidebar.NavItem
            icon={<IoCallOutline />}
            text="Contact"
            onClick={() => handleSidebarLink("contact")}
          />
        </MakeSidebar.NavSection>
        <MakeSidebar.NavSection title="About Me">
          <MakeSidebar.NavItem
            icon={<IoBodyOutline />}
            text="About Me"
            onClick={() => handleSidebarLink("aboutMe")}
          />
          <MakeSidebar.NavItem
            icon={<IoColorPaletteOutline />}
            text="Hobbies"
            onClick={() => handleSidebarLink("hobbies")}
          />
          <MakeSidebar.NavItem
            icon={<IoAirplaneOutline />}
            text="Roadmap"
            onClick={() => handleSidebarLink("roadmap")}
          />
          <MakeSidebar.NavItem
            icon={<IoThumbsUpOutline />}
            text="Feedback"
            onClick={() => handleSidebarLink("feedback")}
          />
        </MakeSidebar.NavSection>
      </MakeSidebar>

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
        >
          <Tabs.List className={`${classes.background} rounded-lg p-2`}>
            <Tabs.Tab
              ref={portfolioTabRef}
              anchor="Portfolio-tab"
              className={`px-4 py-2 rounded-lg ${classes.text} ${classes.hover}`}
            >
              Portfolio
            </Tabs.Tab>
            <Tabs.Tab
              ref={aboutMeTabRef}
              anchor="About-me-tab"
              className={`px-4 py-2 rounded-lg ${classes.text} ${classes.hover}`}
            >
              About Me
            </Tabs.Tab>
          </Tabs.List>

          {/* Portfolio Tab Content */}
          <Tabs.Content
            anchor="Portfolio-tab"
            className={`${classes.typography.marginBottom.large}`}
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
              <CaseStudiesSection theme={theme} />
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
