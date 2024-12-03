// IntroSection.tsx

import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { Card } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";
import { motion } from "framer-motion"; // Import framer-motion

interface IntroSectionProps {
  theme: "dark" | "light";
}

// Lazy load expanded content if it's heavy (optional)
// const ExpandedContent = lazy(() => import("./ExpandedContent"));

const IntroSection = ({ theme }: IntroSectionProps) => {
  const classes = getThemeClasses(theme);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, when: "afterChildren" },
    },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, when: "beforeChildren" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Load the expanded state from localStorage on component mount
  useEffect(() => {
    const storedState = localStorage.getItem("introSectionExpanded");
    if (storedState === "true") {
      setIsExpanded(true);
    }
  }, []);

  // Save the expanded state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("introSectionExpanded", isExpanded.toString());
  }, [isExpanded]);

  // Smooth scroll into view when expanded
  useEffect(() => {
    if (isExpanded && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      // Optionally, set focus to the content for accessibility
      contentRef.current.focus();
    }
  }, [isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.section
      id="about-me"
      className={`${classes.spacing.padding.large} responsive-padding`}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      aria-labelledby="about-me-heading"
    >
      <motion.h2
        id="about-me-heading"
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text} responsive-heading`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        About Me
      </motion.h2>
      <motion.div initial="hidden" animate="visible" variants={cardVariants}>
        <Card
          withDivider={false}
          className={`${classes.background} ${classes.text} ${classes.borderGreen} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large} responsive-card`}
        >
          {/* Always Visible First Paragraph */}
          <p
            className={`${classes.textSizes.body} responsive-paragraph ${classes.typography.textWrapping} ${classes.typography.whiteSpace}`}
          >
            Hi, I'm FC Venter, a South African software developer passionate
            about creating practical, scalable, and user-focused digital
            solutions. My journey in technology has been driven by curiosity and
            dedication, earning my B.Sc. in Information Technology with
            distinction and now continuing with my honours degree in Computer
            Science and Information Systems. I thrive on crafting bespoke
            solutions to complex problems, from full-stack web development to
            network management and data analysis.
          </p>

          {/* Collapsible Content */}
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            className="overflow-hidden"
            ref={contentRef}
            id="intro-content"
            tabIndex={-1} // Make focusable for accessibility
            aria-hidden={!isExpanded}
          >
            <div className="mt-6">
              <h2
                className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginTop.large} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text} responsive-subheading`}
              >
                My Journey
              </h2>

              <p
                className={`${classes.textSizes.body} responsive-paragraph ${classes.typography.textWrapping} ${classes.typography.whiteSpace}`}
              >
                My time at North-West University has been a blend of academic
                success and giving back to my community. For the past two years,
                I've worked as a student assistant, helping younger students in
                class and assisting with administrative tasks. I've also gone
                the extra mile by tutoring peers in modules I excelled at, even
                those we were currently taking together. This experience has not
                only reinforced my own knowledge but also taught me the value of
                patience, communication, and adaptability.
              </p>

              <p
                className={`${classes.textSizes.body} ${classes.typography.marginTop.large} responsive-paragraph ${classes.typography.textWrapping} ${classes.typography.whiteSpace}`}
              >
                I embraced challenges head-on, excelling academically and
                earning membership in the prestigious Golden Key International
                Honour Society. I also took a dive into the cutting-edge world
                of quantum computing, earning the QBronze Quantum Computing
                Diploma.
              </p>

              <p
                className={`${classes.textSizes.body} ${classes.typography.marginTop.large} responsive-paragraph ${classes.typography.textWrapping} ${classes.typography.whiteSpace}`}
              >
                But my journey doesn't end in academia. I've worked on diverse
                projects, building secure role-based access systems using the
                MERN stack, leading deployment pipelines with Docker Compose,
                and delivering innovative freelance solutions for large-scale
                projects. My versatility and adaptability have been key in
                pushing boundaries and achieving impactful results.
              </p>

              <h2
                className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginTop.large} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text} responsive-subheading`}
              >
                Beyond the Code
              </h2>
              <p
                className={`${classes.textSizes.body} responsive-paragraph ${classes.typography.textWrapping} ${classes.typography.whiteSpace}`}
              >
                When I'm not immersed in coding, you'll find me enjoying life's
                other passions. Whether I'm supporting Arsenal or the
                Springboks, or glued to the screen during a Formula 1 weekend
                cheering for Lewis Hamilton and Charles Leclerc, sport is a big
                part of my life. Music is another passion that fuels my
                productivity—I love exploring new genres and sounds. I'm also a
                keen traveller who finds inspiration in nature and new
                surroundings.
              </p>

              <h2
                className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginTop.large} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text} responsive-subheading`}
              >
                My Approach
              </h2>
              <p
                className={`${classes.textSizes.body} responsive-paragraph ${classes.typography.textWrapping} ${classes.typography.whiteSpace}`}
              >
                Collaboration, curiosity, and creativity are at the core of
                everything I do. I love working with others to build solutions
                that are not just functional but meaningful. Whether it's
                collaborating with teammates on a groundbreaking project,
                exploring new technologies, or mentoring others, I'm driven by a
                love for learning and sharing knowledge.
              </p>

              <h2
                className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginTop.large} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text} responsive-subheading`}
              >
                Let's Collaborate
              </h2>

              <p
                className={`${classes.textSizes.body} responsive-paragraph ${classes.typography.textWrapping} ${classes.typography.whiteSpace}`}
              >
                Looking for someone who's not just skilled but also passionate?
                Let's bring your ideas to life. Whether it's full-stack web
                development, innovative data analysis, or tailored
                problem-solving, I'm here to help.
              </p>
            </div>
          </motion.div>

          {/* Read More / Read Less Button with animation */}
          <motion.div
            className="flex justify-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
          >
            <motion.button
              ref={buttonRef}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={toggleExpanded}
              className={`cursor-pointer ${classes.hover} ${classes.textSizes.body} ${classes.typography.fontSemibold} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              aria-expanded={isExpanded}
              aria-controls="intro-content"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </motion.button>
          </motion.div>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default IntroSection;
