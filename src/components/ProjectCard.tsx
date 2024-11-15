import { Card, Button } from '@rewind-ui/core';

interface ProjectCardProps {
  title: string;
  technologies: string;
  features: string;
  link?: string; // Optional link prop for completed projects
}

const ProjectCard = ({ title, technologies, features, link }: ProjectCardProps) => (
  <Card withDivider={false} className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-lg border border-purple-500 min-w-[250px]">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="mt-2"><strong>Technologies:</strong> {technologies}</p>
    <p className="mt-2"><strong>Features:</strong> {features}</p>
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

export default ProjectCard;
