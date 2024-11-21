import { Card } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";

interface HobbiesSectionProps {
  theme: "dark" | "light";
}

const HobbiesSection = ({ theme }: HobbiesSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section
      className={`hobbies ${classes.spacing.padding.extraLarge} flex justify-center`}
    >
      <div className="w-full max-w-lg">
        <h2
          className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
        >
          Hobbies and Interests
        </h2>
        <Card
          bordered={true}
          className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large}`}
          style={{
            minWidth: "300px",
            margin: "0 auto",
          }}
        >
          <ul
            className={`list-disc ${classes.spacing.paddingLeft.large} ${classes.textSizes.body}`}
          >
            <li className={`${classes.typography.marginBottom.small}`}>
              Exploring new technologies in software development
            </li>
            <li className={`${classes.typography.marginBottom.small}`}>
              Watching and analysing football tactics
            </li>
            <li className={`${classes.typography.marginBottom.small}`}>
              Reading and watching Science Fiction
            </li>
            <li className={`${classes.typography.marginBottom.small}`}>
              Socialising and meeting new people
            </li>
            <li className={`${classes.typography.marginBottom.small}`}>
              Playing video games
            </li>
            <li>Hiking and enjoying nature</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default HobbiesSection;
