import { useState, useEffect, useRef } from "react";
import { Card, Button } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";
import { motion } from "framer-motion"; // Import framer-motion

interface IntroSectionProps {
  theme: "dark" | "light";
}

const IntroSection = ({ theme }: IntroSectionProps) => {
  const classes = getThemeClasses(theme);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("160px");

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
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

  // Update maxHeight based on expansion state
  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        const firstParagraph = contentRef.current.querySelector("p");
        if (firstParagraph) {
          const height = firstParagraph.clientHeight;
          setMaxHeight(`${height + 16}px`);
        } else {
          setMaxHeight("160px");
        }
      }
    }
  }, [isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.section
      className={`${classes.spacing.padding.large}`}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <motion.h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        About Me
      </motion.h2>
      <motion.div initial="hidden" animate="visible" variants={cardVariants}>
        <Card
          withDivider={false}
          className={`${classes.background} ${classes.text} ${classes.borderGreen} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large}`}
        >
          {/* Content Wrapper with animation */}
          <motion.div
            variants={contentVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
            initial="collapsed"
            className="overflow-hidden"
            style={{
              maxHeight: maxHeight,
            }}
            ref={contentRef}
            id="intro-content"
          >
            <p className={`${classes.textSizes.body}`}>
              Hi, I'm FC Venter, a passionate and driven software developer from
              South Africa with a deep commitment to crafting modern, scalable,
              and user-friendly web applications. I bring a strong foundation in
              computer science, complemented by hands-on experience in
              full-stack development and DevOps.
            </p>

            <div
              className={`transition-opacity duration-500 ease-in-out ${
                isExpanded ? "opacity-100 mt-6" : "opacity-0 mt-0"
              }`}
            >
              <p className={`${classes.textSizes.body}`}>
                With expertise in technologies like the MERN stack, TypeScript,
                Docker, and Azure, I specialize in building robust solutions for
                complex challenges. My recent work includes leading an IAM
                project with role-based access controls, lifetime monitoring,
                and seamless deployment pipelines using GitHub Actions and
                Docker Compose.
              </p>

              <p
                className={`${classes.typography.marginTop.large} ${classes.textSizes.body}`}
              >
                Beyond coding, I am a lifelong learner, enthusiastic about
                exploring new domains such as quantum computing, where I earned
                the QBronze Diploma. My academic journey at North-West
                University has been marked by excellence, including membership
                in the Golden Key International Honour Society and advancing to
                the penultimate round of the National Programming Olympiad.
              </p>

              <p
                className={`${classes.typography.marginTop.large} ${classes.textSizes.body}`}
              >
                I thrive on teamwork, collaboration, and innovation. Whether
                it's analyzing football tactics, playing video games, or hiking
                in nature, I bring curiosity and creativity to everything I do.
                I am always eager to share knowledge, contribute to impactful
                projects, and grow both personally and professionally.
              </p>

              <p
                className={`${classes.typography.marginTop.large} ${classes.textSizes.body}`}
              >
                Let's build something amazing together!
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
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={toggleExpanded}
              className={`cursor-pointer ${classes.hover} ${classes.textSizes.body} ${classes.typography.fontSemibold}`}
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
