import { getThemeClasses } from '../theme/themeConfig';

interface Skill {
  name: string;
  level: string; // E.g., "3+ yrs", "Native", "Excellent"
  percentage: number; // Proficiency percentage for the bar
}

interface SkillsSectionProps {
  theme: 'dark' | 'light';
}

const skills: Skill[] = [
  { name: 'ASP.NET', level: '3+ yrs', percentage: 75 },
  { name: 'Python', level: '2+ yrs', percentage: 70 },
  { name: 'HTML/CSS', level: '4+ yrs', percentage: 90 },
  { name: 'JavaScript', level: '1+ yrs', percentage: 60 },
  { name: 'GIT', level: '1+ yrs', percentage: 65 },
  { name: 'LaTeX', level: '1+ yrs', percentage: 60 },
  { name: 'Afrikaans / English', level: 'Native', percentage: 100 },
  { name: 'Collaboration / Teamwork', level: 'Excellent', percentage: 95 },
];

const SkillsSection = ({ theme }: SkillsSectionProps) => {
  const classes = getThemeClasses(theme);

  // Define color classes based on theme
  const progressColor = theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-600';
  const progressBackground = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300';
  const textColor = classes.text;
  const mutedTextColor = classes.mutedText;

  return (
    <section className="skills p-8">
      <h2 className={`text-3xl font-semibold mb-6 text-center ${textColor}`}>Skills</h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
          >
            {/* Skill Name */}
            <div className="w-full sm:w-1/3 text-left">
              <span className={`font-semibold ${textColor}`}>{skill.name}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full sm:w-2/3">
              <div
                className={`h-6 rounded-full ${progressBackground}`}
                role="progressbar"
                aria-valuenow={skill.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency`}
              >
                <div
                  className={`${progressColor} h-full rounded-full transition-width duration-700`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>

            {/* Skill Level */}
            <div className="w-full sm:w-1/6 text-left sm:text-right">
              <span className={`text-sm font-medium ${mutedTextColor}`}>
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
