import { Card } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";

interface EducationCardProps {
  degree: string;
  institution: string;
  years: string;
  theme: "dark" | "light";
}

const EducationCard = ({
  degree,
  institution,
  years,
  theme,
}: EducationCardProps) => {
  const classes = getThemeClasses(theme);

  return (
    <Card
      withDivider={false}
      className={`${classes.background} ${classes.text} ${classes.borderGreen} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large}`}
    >
      <h3
        className={`${classes.textSizes.subheading} ${classes.typography.fontBold}`}
      >
        {degree}
      </h3>
      <p
        className={`${classes.textSizes.body} ${classes.typography.marginTop.small}`}
      >
        {institution}
      </p>
      <p
        className={`${classes.textSizes.body} ${classes.typography.marginTop.small} ${classes.mutedText}`}
      >
        {years}
      </p>
    </Card>
  );
};

export default EducationCard;
