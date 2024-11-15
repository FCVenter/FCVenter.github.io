import { Card } from '@rewind-ui/core';

const skills: { [key in 'Languages' | 'Frameworks' | 'Technologies' | 'Soft Skills']: string[] } = {
  Languages: ['Python', 'C#', 'C/C++', 'Java', 'JavaScript', 'Pascal', 'CSS/HTML'],
  Frameworks: ['React', 'Angular', 'ASP.NET', 'React Native', 'Flutter', 'Bootstrap', 'Tailwind', 'PyTest'],
  Technologies: ['PostgreSQL', 'SQL Server', 'Docker', 'GitLab CI', 'Azure', 'Git/GitHub', 'Qiskit', 'TensorFlow'],
  'Soft Skills': [
    'Problem-Solving', 'Communication', 'Teamwork', 'Adaptability', 'Time Management', 
    'Attention to Detail', 'Creativity', 'Critical Thinking', 'Patience and Perseverance', 'Empathy'
  ],
};

const SkillsSection = () => (
  <section className="skills p-8 text-center">
    <h2 className="text-3xl font-semibold">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {Object.keys(skills).map((category) => (
        <Card key={category} className="p-6 bg-gradient-to-r from-green-500 to-purple-600 rounded-lg shadow-lg">
          <h3 className="font-bold text-white mb-2">{category}</h3>
          <ul className="text-white space-y-1">
            {skills[category as keyof typeof skills].map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </section>
);

export default SkillsSection;
