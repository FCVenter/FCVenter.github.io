// /components/ProjectsSection.tsx

import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { getThemeClasses } from "../theme/themeConfig";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "../theme/animations";
import useDragScroll from "../theme/useDragScroll"; // Updated import

interface ProjectsSectionProps {
  theme: "dark" | "light";
}

const ProjectsSection = ({ theme }: ProjectsSectionProps) => {
  const completedRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLDivElement>(null);
  const classes = getThemeClasses(theme);

  const completedHandlers = useDragScroll(completedRef);
  const currentHandlers = useDragScroll(currentRef);

  const completedProjects = [
    {
      title: "Fullstack Web Portal with RBAC",
      technologies: "MERN Stack, TypeScript, Docker, Azure",
      features:
        "Role-based access control, Document management, Moderation tools",
      link: "",
    },
    {
      title: "Airbnb Data Analysis",
      technologies: "Python, PostgreSQL",
      features: "Data cleaning, Statistical analysis, Visualization",
      link: "https://github.com/FCVenter/Airbnb-Data-Analysis",
    },
    {
      title: "Supermarket Inventory Management System",
      technologies: "C#, MS SQL Server",
      features: "Inventory Tracking, Sales Reporting, Automatic Re-Ordering",
      link: "https://github.com/FCVenter/Supermarket-Inventory-Management-System",
    },
    {
      title: "Real-Time Chat App",
      technologies: "Python",
      features: "Individual and group chat, Real-time messaging",
      link: "https://github.com/FCVenter/Python-Chat-app",
    },
    {
      title: "Company Network Simulation",
      technologies: "CISCO Packet Tracer",
      features: "Network Design, Security, VLAN isolation, DHCP Relay",
      link: "https://github.com/FCVenter/CISCO-Packet-Tracer-Company-Network",
    },
    {
      title: "AES and Custom Encryption in Python",
      technologies: "Python",
      features: "AES Encryption, Custom encryption algorithms",
      link: "https://github.com/FCVenter/Encryption",
    },
    {
      title: "Coffee Shop Inventory Management System",
      technologies: "C#, MS SQL Server",
      features: "Inventory Control, Point Of Sale",
      link: "https://github.com/FCVenter/Coffee-Shop-Inventory-Management-System",
    },
    {
      title: "Web-based Library Information System",
      technologies: "ASP.NET",
      features: "Book cataloging, Cookie storage",
      link: "https://github.com/FCVenter/Web-based-Library-information-system",
    },
  ];

  const currentProjects = [
    {
      title: "International Booking System",
      technologies: "Flutter, Firebase",
      features: "Secure Payments, Heavy Traffic",
    },
    {
      title: "Narrative Aptitude Test for Children",
      technologies: "Flutter, Firebase",
      features: "Educational tool, Used nationwide",
    },
    {
      title: "Live Market Data App for Business",
      technologies: "React Native, API Integration",
      features: "Real-time market data, Customized for farming industry",
    },
    {
      title: "Dynamic PowerPoint Builder",
      technologies: "C#, .NET",
      features: "Dynamic Slide creation, API Integration",
    },
  ];

  return (
    <motion.section
      id="projects"
      className={`w-full mx-auto projects ${classes.spacing.padding.extraLarge} ${classes.typography.textAlignCenter} ${classes.background} ${classes.text}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      aria-labelledby="projects-heading"
    >
      <motion.h2
        id="projects-heading"
        className={`${classes.spacing.padding.extraLarge} ${classes.textSizes.heading} ${classes.typography.fontSemibold}`}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Projects
      </motion.h2>

      {/* Completed Projects Section */}
      <motion.h3
        className={`${classes.textSizes.subheading} ${classes.typography.marginTop.extraLarge}`}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Completed
      </motion.h3>
      <motion.div
        ref={completedRef}
        className={`w-full overflow-x-auto flex ${classes.spacing.spaceX.medium} ${classes.typography.marginTop.large} no-scrollbar cursor-grab`}
        onMouseDown={completedHandlers.handleMouseDown}
        variants={fadeIn}
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
        initial="hidden"
        animate="visible"
        role="region"
        aria-label="Completed Projects"
      >
        {completedProjects.map((project, index) => (
          <ProjectCard
            theme={theme}
            minHeight="470px"
            key={index}
            title={project.title}
            technologies={project.technologies}
            features={project.features}
            link={project.link}
          />
        ))}
      </motion.div>

      {/* Current Projects Section */}
      <motion.h3
        className={`${classes.textSizes.subheading} ${classes.typography.marginTop.extraLarge}`}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Current
      </motion.h3>
      <motion.div
        ref={currentRef}
        className={`w-full overflow-x-auto flex ${classes.spacing.spaceX.medium} ${classes.typography.marginTop.large} no-scrollbar cursor-grab ${classes.spacing.paddingX.medium}`}
        onMouseDown={currentHandlers.handleMouseDown}
        variants={fadeIn}
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
        initial="hidden"
        animate="visible"
        role="region"
        aria-label="Current Projects"
      >
        {currentProjects.map((project, index) => (
          <ProjectCard
            theme={theme}
            minHeight="300px"
            key={index}
            title={project.title}
            technologies={project.technologies}
            features={project.features}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
