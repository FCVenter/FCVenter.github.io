// App.tsx
import React, { useState, useEffect, useRef } from "react";
import { Tabs, Sidebar, useSidebar, SidebarState } from "@rewind-ui/core";
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
import {
  HomeOutline,
  SchoolOutline,
  BookOutline,
  LaptopOutline,
  CallOutline,
  BodyOutline,
  ColorPaletteOutline,
  AirplaneOutline,
  BulbOutline,
  ThumbsUpOutline,
} from "react-ionicons";

const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const classes = getThemeClasses(theme);
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();

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
    gallery: "About-me-tab",
    roadmap: "About-me-tab",
    feedback: "About-me-tab",
    hobbies: "About-me-tab",
    // Add more mappings as needed
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
    <div
      className={`flex min-h-screen ${classes.background} ${classes.text} ${classes.transition}`}
    >
      <Sidebar
        // Remove the color prop if you’re using className for background
        // color={theme === "dark" ? "dark" : "gray"}
        className={`${classes.background}`} // Apply your custom background class
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
      >
        <Sidebar.Head>
          <Sidebar.Head.Logo>
            <img
              src="../assets/gallery/image1.jpg"
              width={48}
              height={48}
              alt="Rewind-UI"
            />
          </Sidebar.Head.Logo>
          <Sidebar.Head.Title>FC Venter</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>

        {/* Sidebar Navigation */}
        <Sidebar.Nav>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Portfolio</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item
              icon={<HomeOutline color="currentColor" />}
              label="Dashboard"
              onClick={() => handleSidebarLink("hero")}
              active={false} // Implement active state if needed
              className="text-purple-500 hover:text-purple-700"
            />
            <Sidebar.Nav.Section.Item
              icon={<SchoolOutline color="currentColor" />}
              label="Education"
              onClick={() => handleSidebarLink("education")}
              active={false}
              className="text-purple-500 hover:text-purple-700"
            />
            <Sidebar.Nav.Section.Item
              icon={<BulbOutline color="currentColor" />}
              label="Skills"
              onClick={() => handleSidebarLink("skills")}
              active={false}
              className="text-purple-500 hover:text-purple-700"
            />
            <Sidebar.Nav.Section.Item
              icon={<LaptopOutline color="currentColor" />}
              label="Projects"
              onClick={() => handleSidebarLink("projects")}
              active={false}
              className="text-purple-500 hover:text-purple-700"
            />
            <Sidebar.Nav.Section.Item
              icon={<BookOutline color="currentColor" />}
              label="Case Studies"
              onClick={() => handleSidebarLink("case-studies")}
              active={false}
              className="text-purple-500 hover:text-purple-700"
            />
            <Sidebar.Nav.Section.Item
              icon={<CallOutline color="currentColor" />}
              label="Contact"
              onClick={() => handleSidebarLink("contact")}
              active={false}
              className="text-purple-500 hover:text-purple-700"
            />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>About Me</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item
              icon={<BodyOutline color="currentColor" />}
              label="About Me"
              onClick={() => handleSidebarLink("aboutMe")}
              active={false}
              className="text-purple-500 hover:text-purple-700"
            />
            <Sidebar.Nav.Section.Item
              icon={<ColorPaletteOutline color="currentColor" />}
              label="Hobbies"
              onClick={() => handleSidebarLink("hobbies")}
              active={false}
              className="text-purple-500 hover:text-purple-700"
            />
            <Sidebar.Nav.Section.Item
              icon={<AirplaneOutline color="currentColor" />}
              label="Roadmap"
              onClick={() => handleSidebarLink("roadmap")}
              active={false}
              className="text-purple-500 hover:text-purple-700"
            />
            <Sidebar.Nav.Section.Item
              icon={<ThumbsUpOutline color="currentColor" />}
              label="Feedback"
              onClick={() => handleSidebarLink("feedback")}
              active={false}
              className="text-purple-500 hover:text-purple-700"
            />
            {/* Add more Sidebar.Nav.Section.Item as needed */}
          </Sidebar.Nav.Section>
        </Sidebar.Nav>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section (Outside Tabs) */}
        <HeroSection theme={theme} toggleTheme={toggleTheme} />

        {/* Tabs Component */}
        <Tabs defaultTab="Portfolio-tab" color="purple" fullWidth className="p-4">
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
            className={classes.typography.marginBottom.large}
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
            className={classes.typography.marginBottom.large}
          >
            <div id="about-me">
              <IntroSection theme={theme} />
            </div>
            <div id="gallery">
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
