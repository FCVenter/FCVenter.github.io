import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { getThemeClasses } from "../theme/themeConfig";

interface ContactSectionProps {
  theme: "dark" | "light";
}

const ContactSection = ({ theme }: ContactSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section
      className={`contact ${classes.spacing.padding.extraLarge} ${classes.typography.textAlignCenter} ${classes.background} ${classes.text}`}
    >
      <h2
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
          <FaPhone /> <span>+27 82 729 1986</span>
        </p>
        <p
          className={`flex items-center justify-center ${classes.spacing.spaceX.small}  ${classes.textSizes.body}`}
        >
          <FaEnvelope /> <span>fcventer17@gmail.com</span>
        </p>
        <p
          className={`flex items-center justify-center ${classes.spacing.spaceX.small}  ${classes.textSizes.body}`}
        >
          <FaMapMarkerAlt /> <span>Potchefstroom, South Africa</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
