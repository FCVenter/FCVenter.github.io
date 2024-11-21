import { useState, useEffect, useRef } from "react";
import { Card, Button } from "@rewind-ui/core"; // Import Button from Rewind UI
import { getThemeClasses } from "../theme/themeConfig";

interface IntroSectionProps {
  theme: "dark" | "light";
}

const IntroSection = ({ theme }: IntroSectionProps) => {
  const classes = getThemeClasses(theme);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("160px"); // Initial collapsed height

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
        // Set to the height of the first paragraph
        const firstParagraph = contentRef.current.querySelector("p");
        if (firstParagraph) {
          const height = firstParagraph.clientHeight;
          setMaxHeight(`${height + 16}px`); // Adding some padding/margin
        } else {
          setMaxHeight("160px"); // Fallback value
        }
      }
    }
  }, [isExpanded]);

  // Toggle the expanded state
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className={`${classes.spacing.padding.large}`}>
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
      >
        About Me
      </h2>
      <Card
        withDivider={false}
        className={`${classes.background} ${classes.text} ${classes.borderGreen} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large}`}
      >
        {/* Content Wrapper with dynamic max-height */}
        <div
          className="overflow-hidden transition-max-height duration-500 ease-in-out"
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
            computer science, complemented by hands-on experience in full-stack
            development and DevOps.
          </p>

          {/* Additional Content */}
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              isExpanded ? "opacity-100 mt-6" : "opacity-0 mt-0"
            }`}
          >
            <p className={`${classes.textSizes.body}`}>
              With expertise in technologies like the MERN stack, TypeScript,
              Docker, and Azure, I specialize in building robust solutions for
              complex challenges. My recent work includes leading an IAM project
              with role-based access controls, lifetime monitoring, and seamless
              deployment pipelines using GitHub Actions and Docker Compose.
            </p>

            <p
              className={`${classes.typography.marginTop.large} ${classes.textSizes.body}`}
            >
              Beyond coding, I am a lifelong learner, enthusiastic about
              exploring new domains such as quantum computing, where I earned
              the QBronze Diploma. My academic journey at North-West University
              has been marked by excellence, including membership in the Golden
              Key International Honour Society and advancing to the penultimate
              round of the National Programming Olympiad.
            </p>

            <p
              className={`${classes.typography.marginTop.large} ${classes.textSizes.body}`}
            >
              I thrive on teamwork, collaboration, and innovation. Whether it's
              analyzing football tactics, playing video games, or hiking in
              nature, I bring curiosity and creativity to everything I do. I am
              always eager to share knowledge, contribute to impactful projects,
              and grow both personally and professionally.
            </p>

            <p
              className={`${classes.typography.marginTop.large} ${classes.textSizes.body}`}
            >
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Read More / Read Less Button */}
        <div className="flex justify-center mt-4">
          <Button
            variant="link" // Choose appropriate variant based on your design
            tone="outline"
            onClick={toggleExpanded}
            className={`${classes.hover} ${classes.textSizes.body} ${classes.typography.fontSemibold}`}
            aria-expanded={isExpanded}
            aria-controls="intro-content"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default IntroSection;
