import { Card } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

interface HobbiesSectionProps {
  theme: 'dark' | 'light';
}

const HobbiesSection = ({ theme }: HobbiesSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className="hobbies p-8">
      <h2 className={`text-3xl font-semibold mb-4 text-center ${classes.text}`}>Hobbies and Interests</h2>
      <Card bordered={true} className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} p-6`}>
        <ul className="list-disc pl-6">
          <li>Watching and analyzing football tactics</li>
          <li>Exploring new technologies in software development</li>
          <li>Playing FIFA and chess</li>
          <li>Hiking and enjoying nature</li>
        </ul>
      </Card>
    </section>
  );
};

export default HobbiesSection;
