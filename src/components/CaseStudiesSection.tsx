import { Card } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";

interface CaseStudiesSectionProps {
  theme: "dark" | "light";
}

const CaseStudiesSection = ({ theme }: CaseStudiesSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className={`${classes.spacing.padding.large}`}>
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
      >
        Case Studies
      </h2>
      <Card
        withDivider={false}
        className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large} ${classes.spacing.spaceY.medium}`}
      >
        <h3
          className={`${classes.typography.fontBold} ${classes.textSizes.subheading}`}
        >
          Airbnb Data Analysis
        </h3>
        <p className={`${classes.textSizes.body}`}>
          <strong>Problem:</strong> A lack of actionable insights for optimizing
          Airbnb listings in Cape Town.
        </p>
        <p className={`${classes.textSizes.body}`}>
          <strong>Solution:</strong> Conducted data cleaning, statistical
          analysis, and visualization using Python and PostgreSQL to identify
          key trends in pricing, occupancy, and customer preferences.
        </p>
        <p className={`${classes.textSizes.body}`}>
          <strong>Results:</strong> Provided data-driven recommendations to
          improve listing descriptions, pricing strategies, and customer
          satisfaction.
        </p>
      </Card>
    </section>
  );
};

export default CaseStudiesSection;
