import { Card, Button } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

interface ProjectCardProps {
  title: string;
  technologies: string;
  features: string;
  link?: string; // Optional link prop for completed projects
  theme: 'dark' | 'light'; // Theme prop
}

const ProjectCard = ({ title, technologies, features, link, theme }: ProjectCardProps) => {
  const classes = getThemeClasses(theme); // Use theme to get the appropriate classes

  return (
    <Card
      withDivider={false}
      className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} p-6 rounded-lg min-w-[250px]`}
    >
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2">
        <strong>Technologies:</strong> {technologies}
      </p>
      <p className="mt-2">
        <strong>Features:</strong> {features}
      </p>
      {link && (
        <Button
          as="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          color="purple"
          className="mt-4"
          radius="full"
          shadow="lg"
          shadowColor="black"
        >
          Learn More
        </Button>
      )}
    </Card>
  );
};

export default ProjectCard;
