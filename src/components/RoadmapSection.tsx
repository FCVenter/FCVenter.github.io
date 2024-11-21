import { Card } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";

interface RoadmapSectionProps {
  theme: "dark" | "light";
}

const RoadmapSection = ({ theme }: RoadmapSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className={`${classes.spacing.padding.large}`}>
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
      >
        Roadmap
      </h2>
      <Card
        withDivider={false}
        className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large}`}
      >
        <ul
          className={`list-disc ${classes.spacing.paddingLeft.large} ${classes.textSizes.body}`}
        >
          <li className={`${classes.typography.marginBottom.small}`}>
            Build a task management app using React Native and Firebase
          </li>
          <li className={`${classes.typography.marginBottom.small}`}>
            Develop a personal blog with a Markdown editor
          </li>
          <li className={`${classes.typography.marginBottom.small}`}>
            Create an AI-powered chatbot for FAQ automation
          </li>
          <li>Work on a Flutter app for local event ticket booking</li>
        </ul>
      </Card>
    </section>
  );
};

export default RoadmapSection;
