import { Card } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

interface IntroSectionProps {
  theme: 'dark' | 'light';
}

const IntroSection = ({ theme }: IntroSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className="p-6">
      <h2 className={`text-3xl font-semibold mb-4 text-center ${classes.text}`}>
        About Me
      </h2>
      <Card
        withDivider={false}
        className={`${classes.background} text-xl ${classes.text} ${classes.borderGreen} ${classes.shadow} ${classes.transition} p-6 rounded-lg`}
      >
        <p>
          Hi, I'm FC Venter, a passionate and driven software developer from
          South Africa with a deep commitment to crafting modern, scalable, and
          user-friendly web applications. I bring a strong foundation in
          computer science, complemented by hands-on experience in full-stack
          development and DevOps.
        </p>

        <p className="mt-4">
          With expertise in technologies like the MERN stack, TypeScript,
          Docker, and Azure, I specialize in building robust solutions for
          complex challenges. My recent work includes leading an IAM project
          with role-based access controls, lifetime monitoring, and seamless
          deployment pipelines using GitHub Actions and Docker Compose.
        </p>

        <p className="mt-4">
          Beyond coding, I am a lifelong learner, enthusiastic about exploring
          new domains such as quantum computing, where I earned the QBronze
          Diploma. My academic journey at North-West University has been marked
          by excellence, including membership in the Golden Key International
          Honour Society and advancing to the penultimate round of the National
          Programming Olympiad.
        </p>

        <p className="mt-4">
          I thrive on teamwork, collaboration, and innovation. Whether it's
          analyzing football tactics, playing video games, or hiking in nature,
          I bring curiosity and creativity to everything I do. I am always eager
          to share knowledge, contribute to impactful projects, and grow both
          personally and professionally.
        </p>

        <p className="mt-4">Let's build something amazing together!</p>
      </Card>
    </section>
  );
};

export default IntroSection;
