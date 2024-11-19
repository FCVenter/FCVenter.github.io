import { Card } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";

interface HobbiesSectionProps {
  theme: "dark" | "light";
}

const HobbiesSection = ({ theme }: HobbiesSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section className="hobbies p-8 flex justify-center">
      <div className="w-full max-w-lg">
        <h2
          className={`text-3xl font-semibold mb-4 text-center ${classes.text}`}
        >
          Hobbies and Interests
        </h2>
        <Card
          bordered={true}
          className={`${classes.background} ${classes.text} ${classes.borderPurple} ${classes.shadow} ${classes.transition} p-6`}
          style={{
            minWidth: "300px", // Ensures the card doesn't get too narrow
            margin: "0 auto", // Centers the card within its container
          }}
        >
          <ul className="list-disc pl-6 text-xl">
            <li className="mb-2">
              Exploring new technologies in software development
            </li>
            <li className="mb-2">Watching and analysing football tactics</li>
            <li className="mb-2">Reading and watching Science Fiction</li>
            <li className="mb-2">Socialising and meeting new people</li>
            <li className="mb-2">Playing video games</li>
            <li>Hiking and enjoying nature</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default HobbiesSection;
