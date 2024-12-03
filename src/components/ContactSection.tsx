// /components/ContactSection.tsx

import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { getThemeClasses } from "../theme/themeConfig";

interface ContactSectionProps {
  theme: "dark" | "light";
}

const ContactSection = ({ theme }: ContactSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section
      id="contact"
      className={`contact ${classes.spacing.padding.extraLarge} ${classes.typography.textAlignCenter} ${classes.background} ${classes.text}`}
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold}`}
      >
        Contact
      </h2>
      <div
        className={`${classes.typography.marginTop.large} ${classes.spacing.spaceY.medium}`}
      >
        <p
          className={`flex items-center justify-center ${classes.spacing.spaceX.small}  ${classes.textSizes.body}`}
        >
          <FaPhone aria-hidden="true" /> <span>+27 82 729 1986</span>
        </p>
        <p
          className={`flex items-center justify-center ${classes.spacing.spaceX.small}  ${classes.textSizes.body}`}
        >
          <FaEnvelope aria-hidden="true" /> <span>fcventer17@gmail.com</span>
        </p>
        <p
          className={`flex items-center justify-center ${classes.spacing.spaceX.small}  ${classes.textSizes.body}`}
        >
          <FaMapMarkerAlt aria-hidden="true" />{" "}
          <span>Potchefstroom, South Africa</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
