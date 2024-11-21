import { Card, Button } from "@rewind-ui/core";
import { FaSun, FaMoon } from "react-icons/fa";
import { getThemeClasses } from "../theme/themeConfig";

interface HeroSectionProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const HeroSection = ({ theme, toggleTheme }: HeroSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section
      className={`hero bg-gradient-to-br from-purple-600 to-green-500 ${classes.text} p-8 ${classes.typography.textAlignCenter}`}
    >
      <div
        className={`flex items-center justify-center ${classes.typography.marginBottom.large}`}
      >
        {/* Profile Card */}
        <Card
          size="lg"
          className={`flex flex-col items-center p-6 rounded-lg ${classes.background} ${classes.shadow}`}
        >
          <img
            src="./assets/me.jpg"
            alt="FC Venter"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1
            className={`${classes.textSizes.heading} ${classes.typography.fontBold} ${classes.typography.marginBottom.medium}`}
          >
            FC Venter
          </h1>
          <p
            className={`${classes.textSizes.body} ${classes.typography.marginBottom.medium}`}
          >
            Software Developer
          </p>
          <Button
            onClick={toggleTheme}
            variant="secondary"
            color="purple"
            className="flex items-center justify-center p-2"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </Button>
        </Card>
      </div>

      {/* Button to open CV in a new tab */}
      <Button
        as="a"
        href="/assets/documents/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        color="purple"
        shadow="base"
        className={classes.typography.marginBottom.medium}
      >
        View My CV
      </Button>
    </section>
  );
};

export default HeroSection;
