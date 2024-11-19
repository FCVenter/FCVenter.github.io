import { Card } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

interface CaseStudiesSectionProps {
  theme: 'dark' | 'light';
}

const CaseStudiesSection = ({ theme }: CaseStudiesSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className="p-6">
      <h2 className={`text-3xl font-semibold mb-4 text-center ${classes.text}`}>
        Case Studies
      </h2>
      <Card
        withDivider={false}
        className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} p-6 rounded-lg space-y-4`}
      >
        <h3 className="font-bold text-2xl">Airbnb Data Analysis</h3>
        <p className="text-xl">
          <strong>Problem:</strong> A lack of actionable insights for optimizing
          Airbnb listings in Cape Town.
        </p>
        <p className="text-xl">
          <strong>Solution:</strong> Conducted data cleaning, statistical
          analysis, and visualization using Python and PostgreSQL to identify
          key trends in pricing, occupancy, and customer preferences.
        </p>
        <p className="text-xl">
          <strong>Results:</strong> Provided data-driven recommendations to
          improve listing descriptions, pricing strategies, and customer
          satisfaction.
        </p>
      </Card>
    </section>
  );
};

export default CaseStudiesSection;
