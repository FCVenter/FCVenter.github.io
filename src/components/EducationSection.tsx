// /components/EducationSection.tsx

import React from "react";
import CustomCard from "./CustomCard";
import { motion } from "framer-motion";
import { getThemeClasses } from "../theme/themeConfig";

const educationData = [
  {
    degree: "B.Sc in Information Technology",
    institution: "North-West University",
    years: "2022–2024",
  },
  {
    degree: "B.Sc (Hons) in Computer Science and Information Systems",
    institution: "North-West University",
    years: "CURRENT (2025)",
  },
  {
    degree: "QBronze Quantum Computing Diploma",
    institution: "Q World",
    years: "2023",
  },
];

// Define animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of child elements
    },
  },
};

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

interface EducationSectionProps {
  theme: "dark" | "light";
}

const EducationSection: React.FC<EducationSectionProps> = ({ theme }) => {
  const classes = getThemeClasses(theme);

  return (
    <motion.section
      id="education"
      className={`education ${classes.spacing.padding.extraLarge} ${classes.typography.textAlignCenter} ${classes.background} ${classes.text}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.8 }}
      aria-labelledby="education-heading"
    >
      <h2
        id="education-heading"
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.large}`}
      >
        Education
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className={`w-full`}
          >
            <CustomCard
              theme={theme}
              bordered={true} // Ensures border is added
              borderColour={classes.borderGreen}
              color={theme} // Dynamic color based on theme
              radius="lg" // Example: larger border radius
              shadow="md" // Medium shadow
              size="base" // Base padding
              withDivider={false} // No dividers inside the card
              className={`h-full ${classes.shadow}`}
            >
              <h3
                className={`${classes.textSizes.subheading} ${classes.text} ${classes.typography.fontBold}`}
              >
                {edu.degree}
              </h3>
              <p
                className={`${classes.textSizes.body} ${classes.text} ${classes.typography.fontRegular}`}
              >
                {edu.institution}
              </p>
              <p
                className={`italic ${classes.textSizes.small} ${classes.mutedText} ${classes.typography.fontRegular}`}
              >
                {edu.years}
              </p>
            </CustomCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;
