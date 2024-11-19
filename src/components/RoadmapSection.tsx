import { Card } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

interface RoadmapSectionProps {
  theme: 'dark' | 'light';
}

const RoadmapSection = ({ theme }: RoadmapSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className="p-6">
      <h2 className={`text-3xl font-semibold mb-4 text-center ${classes.text}`}>Roadmap</h2>
      <Card
        withDivider={false}
        className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} p-6 rounded-lg`}
      >
        <ul className="list-disc pl-6">
          <li>Build a task management app using React Native and Firebase</li>
          <li>Develop a personal blog with a Markdown editor</li>
          <li>Create an AI-powered chatbot for FAQ automation</li>
          <li>Work on a Flutter app for local event ticket booking</li>
        </ul>
      </Card>
    </section>
  );
};

export default RoadmapSection;
