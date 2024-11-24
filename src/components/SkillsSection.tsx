import { Card } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, hoverEffect } from "../theme/animations";

const skills: {
  [key in
    | "Languages"
    | "Frameworks"
    | "Technologies"
    | "Soft Skills"]: string[];
} = {
  Languages: [
    "Python",
    "C#",
    "C/C++",
    "Java",
    "JavaScript",
    "Pascal",
    "CSS/HTML",
  ],
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

interface SkillsSectionProps {
  theme: "dark" | "light";
}

const SkillsSection = ({ theme }: SkillsSectionProps) => {
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
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className={`skills p-8 ${classes.typography.textAlignCenter}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.large} ${classes.text}`}
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
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={sectionVariants}
      >
        {Object.keys(skills).map((category) => (
          <motion.div
            key={category}
            variants={cardVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 300 }}
            className="flex justify-center"
          >
            <motion.div className={`w-full h-full`} variants={hoverEffect}>
              <Card
                className={`min-h-[450px] p-6 bg-gradient-to-br from-green-500 to-purple-600 rounded-lg shadow-lg ${classes.transition} ${classes.background} ${classes.borderGreen} ${classes.shadow} flex flex-col justify-start`}
                shadow="base"
                bordered={true}
                radius="base"
              >
                <motion.h3
                  className={`${classes.textSizes.subheading} ${classes.typography.fontBold} ${classes.typography.marginBottom.medium} text-white`}
                  style={{
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    fontSize: "clamp(1.25rem, 3vw, 2rem)", // Responsive size from global config
                  }}
                  variants={fadeIn}
                >
                  {category}
                </motion.h3>
                <motion.ul
                  className={`${classes.textSizes.body} text-white ${classes.spacing.spaceY}`}
                  style={{
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  }}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {skills[category as keyof typeof skills].map((skill) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="list-none"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
