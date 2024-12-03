// /components/SkillsChart.tsx

import { getThemeClasses } from "../theme/themeConfig";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: string;
  percentage: number;
}

interface SkillsChartProps {
  theme: "dark" | "light";
}

const skills: Skill[] = [
  { name: "ASP.NET", level: "3+ yrs", percentage: 75 },
  { name: "Python", level: "2+ yrs", percentage: 70 },
  { name: "HTML/CSS", level: "4+ yrs", percentage: 90 },
  { name: "JavaScript", level: "1+ yrs", percentage: 60 },
  { name: "GIT", level: "1+ yrs", percentage: 65 },
  { name: "LaTeX", level: "1+ yrs", percentage: 60 },
  { name: "Afrikaans / English", level: "Native", percentage: 100 },
  { name: "Collaboration / Teamwork", level: "Excellent", percentage: 95 },
];

const SkillsChart = ({ theme }: SkillsChartProps) => {
  const classes = getThemeClasses(theme);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each skill item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for the progress bar
  const progressVariants = (percentage: number) => ({
    hidden: { width: 0 },
    visible: { width: `${percentage}%` },
  });

  return (
    <motion.section
      id="skillsRating"
      className={`skills ${classes.spacing.padding.extraLarge} w-full`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      aria-labelledby="skills-chart-heading"
    >
      <motion.h2
        id="skills-chart-heading"
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.large} ${classes.typography.textAlignCenter} ${classes.text}`}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Skills Ratings
      </motion.h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className={`flex flex-col sm:flex-row items-center ${classes.spacing.spaceY.small} sm:space-y-0 ${classes.spacing.spaceX.medium}`}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Skill Name */}
            <div className="w-full sm:w-1/3 text-left">
              <span
                className={`${classes.typography.fontSemibold} ${classes.textSizes.body} ${classes.text}`}
              >
                {skill.name}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full sm:w-2/3">
              <div
                className={`h-6 rounded-full ${classes.progressBackground}`}
                role="progressbar"
                aria-valuenow={skill.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency`}
              >
                <motion.div
                  className={`${classes.progressColor} h-full rounded-full`}
                  variants={progressVariants(skill.percentage)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 2.0, ease: "easeOut" }}
                ></motion.div>
              </div>
            </div>

            {/* Skill Level */}
            <div className="w-full sm:w-1/6 text-left sm:text-right">
              <span
                className={`${classes.textSizes.small} ${classes.typography.fontRegular} ${classes.mutedText}`}
              >
                {skill.level}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsChart;
