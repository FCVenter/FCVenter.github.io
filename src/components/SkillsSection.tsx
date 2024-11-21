import { Card } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

const skills: { [key in 'Languages' | 'Frameworks' | 'Technologies' | 'Soft Skills']: string[] } = {
  Languages: ['Python', 'C#', 'C/C++', 'Java', 'JavaScript', 'Pascal', 'CSS/HTML'],
  Frameworks: ['React', 'Angular', 'ASP.NET', 'React Native', 'Flutter', 'Bootstrap', 'Tailwind', 'PyTest'],
  Technologies: ['PostgreSQL', 'SQL Server', 'Docker', 'GitLab CI', 'Azure', 'Git/GitHub', 'Qiskit', 'TensorFlow'],
  'Soft Skills': [
    'Problem-Solving', 'Communication', 'Teamwork', 'Adaptability', 'Time Management',
    'Attention to Detail', 'Creativity', 'Critical Thinking', 'Patience and Perseverance', 'Empathy',
  ],
};

interface SkillsSectionProps {
  theme: 'dark' | 'light';
}

const SkillsSection = ({ theme }: SkillsSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className={`skills p-8 ${classes.typography.textAlignCenter}`}>
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.large} ${classes.text}`}
      >
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.keys(skills).map((category) => (
          <Card
            key={category}
            className={`min-w-[155px] p-15 bg-gradient-to-br from-green-500 to-purple-600 rounded-lg shadow-lg ${classes.transition} ${classes.background} ${classes.shadow} rounded-lg`}
          >
            <h3
              className={`${classes.textSizes.subheading} ${classes.typography.fontBold} ${classes.typography.marginBottom.medium} text-white`}
            >
              {category}
            </h3>
            <ul
              className={`${classes.textSizes.body} text-white  ${classes.spacing.spaceY}`}
            >
              {skills[category as keyof typeof skills].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
