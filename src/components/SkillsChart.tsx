import { getThemeClasses } from "../theme/themeConfig";

interface Skill {
  name: string;
  level: string;
  percentage: number;
}

interface SkillsSectionProps {
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

const SkillsSection = ({ theme }: SkillsSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className={`skills ${classes.spacing.padding.extraLarge}`}>
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.large} ${classes.typography.textAlignCenter} ${classes.text}`}
      >
        Skills
      </h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col sm:flex-row items-center ${classes.spacing.spaceY.small} sm:space-y-0 ${classes.spacing.spaceX.medium}`}
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
                <div
                  className={`${classes.progressColor} h-full rounded-full transition-width duration-700`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
