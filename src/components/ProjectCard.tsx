import { Card, Button } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";

interface ProjectCardProps {
  title: string;
  technologies: string;
  features: string;
  link?: string;
  theme: "dark" | "light";
}

const ProjectCard = ({
  title,
  technologies,
  features,
  link,
  theme,
}: ProjectCardProps) => {
  const classes = getThemeClasses(theme);

  return (
    <Card
      withDivider={false}
      className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large} min-w-[250px]`}
    >
      <h3
        className={`${classes.textSizes.subheading} ${classes.typography.fontBold}`}
      >
        {title}
      </h3>
      <p
        className={`${classes.typography.marginTop.medium}  ${classes.textSizes.body}`}
      >
        <strong>Technologies:</strong> {technologies}
      </p>
      <p
        className={`${classes.typography.marginTop.medium} ${classes.textSizes.body}`}
      >
        <strong>Features:</strong> {features}
      </p>
      {link && (
        <Button
          as="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          color="green"
          className={`${classes.typography.marginTop.large}`}
          radius="full"
          shadow="lg"
          shadowColor="black"
          tone="outline"
          withRing={false}
        >
          Learn More
        </Button>
      )}
    </Card>
  );
};

export default ProjectCard;
