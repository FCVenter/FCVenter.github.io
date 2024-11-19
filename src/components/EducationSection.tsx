import EducationCard from './EducationCard';

const educationData = [
  {
    degree: "B.Sc in Information Technology",
    institution: "North-West University",
    years: "2022–2024",
  },
  {
    degree: "B.Sc Hons in Computer Science and Information Systems",
    institution: "North-West University",
    years: "2025",
  },
  {
    degree: "QBronze Quantum Computing Diploma",
    institution: "QBronze",
    years: "2023",
  },
];

interface EducationSectionProps {
  theme: 'dark' | 'light'; // Define theme prop
}

const EducationSection = ({ theme }: EducationSectionProps) => (
  <section className="education p-8 text-center">
    <h2 className="text-3xl font-semibold mb-6">Education</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {educationData.map((edu, index) => (
        <EducationCard
          key={index}
          theme={theme} // Pass theme explicitly to the card
          degree={edu.degree}
          institution={edu.institution}
          years={edu.years}
        />
      ))}
    </div>
  </section>
);

export default EducationSection;
