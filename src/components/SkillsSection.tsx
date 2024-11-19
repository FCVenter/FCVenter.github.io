import { Card } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

const skills: { [key in 'Languages' | 'Frameworks' | 'Technologies' | 'Soft Skills']: string[] } = {
  Languages: ['Python', 'C#', 'C/C++', 'Java', 'JavaScript', 'Pascal', 'CSS/HTML'],
  Frameworks: ['React', 'Angular', 'ASP.NET', 'React Native', 'Flutter', 'Bootstrap', 'Tailwind', 'PyTest'],
  Technologies: ['PostgreSQL', 'SQL Server', 'Docker', 'GitLab CI', 'Azure', 'Git/GitHub', 'Qiskit', 'TensorFlow'],
  'Soft Skills': [
    'Problem-Solving', 'Communication', 'Teamwork', 'Adaptability', 'Time Management', 
    'Attention to Detail', 'Creativity', 'Critical Thinking', 'Patience and Perseverance', 'Empathy'
  ],
};

interface SkillsSectionProps {
  theme: 'dark' | 'light';
}

const SkillsSection = ({ theme }: SkillsSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className="skills p-8 text-center">
      <h2 className={`text-3xl font-semibold mb-6 text-2xl ${classes.text}`}>
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.keys(skills).map((category) => (
          <Card
            key={category}
            className={`min-w-[155px] p-15 bg-gradient-to-br from-green-500 to-purple-600 rounded-lg shadow-lg ${classes.transition}`}
          >
            <h3 className="font-bold text-white text-2xl mb-2">{category}</h3>
            <ul className="text-white text-xl space-y-1">
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
