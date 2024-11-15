import { Card } from '@rewind-ui/core';

interface EducationCardProps {
  degree: string;
  institution: string;
  years: string;
}

const EducationCard = ({ degree, institution, years }: EducationCardProps) => (
  <Card withDivider={false} className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-green-500 transition rounded-lg shadow-lg">
    <h3 className="text-lg font-bold">{degree}</h3>
    <p className="text-sm mt-1">{institution}</p>
    <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">{years}</p>
  </Card>
);

export default EducationCard;
