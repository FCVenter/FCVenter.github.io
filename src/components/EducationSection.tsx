import { getThemeClasses } from "../theme/themeConfig";
import EducationCard from "./EducationCard";

const educationData = [
  {
    degree: "B.Sc in Information Technology",
    institution: "North-West University",
    years: "2022–2024",
  },
  {
    degree: "B.Sc Hons in Computer Science and Information Systems",
    institution: "North-West University",
    years: "CURRENT (2025)",
  },
  {
    degree: "QBronze Quantum Computing Diploma",
    institution: "Q World",
    years: "2023",
  },
];

interface EducationSectionProps {
  theme: "dark" | "light";
}

const EducationSection = ({ theme }: EducationSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section
      className={`education ${classes.spacing.padding.extraLarge} ${classes.typography.textAlignCenter} ${classes.background} ${classes.text}`}
    >
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.large}`}
      >
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            theme={theme}
            degree={edu.degree}
            institution={edu.institution}
            years={edu.years}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
