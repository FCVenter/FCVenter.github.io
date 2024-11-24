// CaseStudiesSection.tsx
import { Card } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";
import { motion } from 'framer-motion';

interface CaseStudiesSectionProps {
  theme: "dark" | "light";
}

const CaseStudiesSection = ({ theme }: CaseStudiesSectionProps) => {
  const classes = getThemeClasses(theme);

  // Animation variants for the section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for the case study card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for the card content
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { delay: 0.2, duration: 0.6 },
    },
  };

  return (
    <motion.section
      className={`${classes.spacing.padding.large}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Case Studies
      </motion.h2>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card
          withDivider={false}
          className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large} ${classes.spacing.spaceY.medium}`}
        >
          <motion.h3
            className={`${classes.typography.fontBold} ${classes.textSizes.subheading}`}
            variants={contentVariants}
          >
            Airbnb Data Analysis
          </motion.h3>
          <motion.p
            className={`${classes.textSizes.body}`}
            variants={contentVariants}
          >
            <strong>Problem:</strong> A lack of actionable insights for optimizing
            Airbnb listings in Cape Town.
          </motion.p>
          <motion.p
            className={`${classes.textSizes.body}`}
            variants={contentVariants}
          >
            <strong>Solution:</strong> Conducted data cleaning, statistical
            analysis, and visualization using Python and PostgreSQL to identify
            key trends in pricing, occupancy, and customer preferences.
          </motion.p>
          <motion.p
            className={`${classes.textSizes.body}`}
            variants={contentVariants}
          >
            <strong>Results:</strong> Provided data-driven recommendations to
            improve listing descriptions, pricing strategies, and customer
            satisfaction.
          </motion.p>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default CaseStudiesSection;
