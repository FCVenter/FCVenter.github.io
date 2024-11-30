// SkillsSection.tsx
import React from "react";
import CustomCard from "./CustomCard";
import { motion } from "framer-motion";
import { getThemeClasses } from "../theme/themeConfig";

interface SkillsSectionProps {
  theme: "dark" | "light";
}

const skills: {
  [key in "Languages" | "Frameworks" | "Technologies" | "Soft Skills"]: string[];
} = {
  Languages: ["Python", "C#", "C/C++", "Java", "JavaScript", "Pascal", "CSS/HTML"],
  Frameworks: [
    "React",
    "Angular",
    "ASP.NET",
    "React Native",
    "Flutter",
    "Bootstrap",
    "Tailwind",
    "PyTest",
  ],
  Technologies: [
    "PostgreSQL",
    "SQL Server",
    "Docker",
    "GitLab CI",
    "Azure",
    "Git/GitHub",
    "Qiskit",
    "TensorFlow",
  ],
  "Soft Skills": [
    "Problem-Solving",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Time Management",
    "Attention to Detail",
    "Creativity",
    "Critical Thinking",
    "Patience and Perseverance",
    "Empathy",
  ],
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ theme }) => {
  const classes = getThemeClasses(theme);

  // Animation variants for the section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each category card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <motion.section id="skills"
      className={`skills p-8 ${classes.typography.textAlignCenter} ${classes.background} ${classes.text}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.large}`}
        style={{
          overflowWrap: "break-word",
          wordBreak: "break-word",
          whiteSpace: "normal",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)", // Dynamic sizing applied globally
        }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch"
        variants={sectionVariants}
      >
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            variants={cardVariants}
            whileHover="hover"
            className="flex"
          >
            <CustomCard
              theme={theme}
              bordered={true} // No border for skill cards
              borderColour={theme === "dark" ? "gray-700" : "blue-50"}
              color={theme === "dark" ? "gray-700" : "blue-50"} // Dynamic color based on theme
              radius="md" // Medium border radius
              shadow="lg" // Larger shadow for emphasis
              size="lg" // Increased padding for skill cards
              withDivider={true} // Add dividers between list items
              className={`w-full ${classes.gradient}`}
            >
              <h3
                className={`${classes.textSizes.heading} text-white ${classes.typography.fontSemibold} ${classes.typography.marginBottom.large}`}
              >
                {category}
              </h3>
              <ul
                className={`list-none list-inside text-white ${classes.spacing.spaceY.small} ${classes.textSizes.body} ${classes.typography.fontRegular}`}
              >
                {skillList.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </CustomCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
