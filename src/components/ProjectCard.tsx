// /components/ProjectCard.tsx
import { Card, Button } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";
import { motion } from "framer-motion";
import { fadeInUp, hoverEffect } from "../theme/animations";

interface ProjectCardProps {
  title: string;
  technologies: string;
  features: string;
  link?: string;
  theme: "dark" | "light";
  minHeight?: string
}

const ProjectCard = ({
  title,
  technologies,
  features,
  link,
  theme,
  minHeight = "250px",
}: ProjectCardProps) => {
  const classes = getThemeClasses(theme);

  return (
    <motion.div
      whileHover="hover"
      variants={hoverEffect}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex justify-center"
    >
      <motion.div className={`w-full h-full`} variants={hoverEffect}>
        <Card
          withDivider={false}
          className={`p-6 ${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large} min-w-[250px] flex flex-col justify-start`} // Changed to justify-start
          shadow="base"
          style={{minHeight}}
          bordered={true}
          radius="base"
        >
          <motion.h3
            className={`${classes.textSizes.subheading} ${classes.typography.fontBold}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className={`${classes.typography.marginTop.medium} ${classes.textSizes.body}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <strong>Technologies:</strong> {technologies}
          </motion.p>
          <motion.p
            className={`${classes.typography.marginTop.medium} ${classes.textSizes.body}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <strong>Features:</strong> {features}
          </motion.p>
          {link && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8, duration: 0.6 }}
              className={`${classes.typography.marginTop.large}`}
            >
              <Button
                as="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                color="green"
                className="w-auto flex items-center justify-center p-2" // Fixed width with w-auto
                radius="full"
                shadow="lg"
                shadowColor="black"
                tone="outline"
                withRing={false}
              >
                Learn More
              </Button>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
