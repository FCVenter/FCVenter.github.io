import { Card } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

interface EducationCardProps {
  degree: string;
  institution: string;
  years: string;
  theme: 'dark' | 'light';
}

const EducationCard = ({ degree, institution, years, theme }: EducationCardProps) => {
  const classes = getThemeClasses(theme);

  return (
    <Card
      withDivider={false}
      className={`${classes.background} ${classes.text} ${classes.borderGreen} ${classes.shadow} ${classes.transition} p-6 rounded-lg`}
    >
      <h3 className="text-lg font-bold">{degree}</h3>
      <p className="text-sm mt-1">{institution}</p>
      <p className={`text-sm mt-1 ${classes.mutedText}`}>{years}</p>
    </Card>
  );
};

export default EducationCard;
