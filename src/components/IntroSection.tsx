import { Card } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

interface IntroSectionProps {
  theme: 'dark' | 'light';
}

const IntroSection = ({ theme }: IntroSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className="p-6">
      <h2 className={`text-3xl font-semibold mb-4 text-center ${classes.text}`}>About Me</h2>
      <Card
        withDivider={false}
        className={`${classes.background} ${classes.text} ${classes.borderGreen} ${classes.shadow} ${classes.transition} p-6 rounded-lg`}
      >
        <p>
          Hi, I'm FC Venter, a passionate software developer from South Africa. I specialize in
          building modern and scalable web applications, with a focus on clean code and user-friendly design.
          I am enthusiastic about learning, sharing knowledge, and contributing to impactful projects.
        </p>
      </Card>
    </section>
  );
};

export default IntroSection;
