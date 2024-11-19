import { Card, Textarea, Button } from '@rewind-ui/core';
import { getThemeClasses } from '../theme/themeConfig';

interface FeedbackSectionProps {
  theme: 'dark' | 'light';
}

const FeedbackSection = ({ theme }: FeedbackSectionProps) => {
  const classes = getThemeClasses(theme);

  return (
    <section>
      <h2 className={`text-3xl font-semibold  text-center ${classes.text}`}>Feedback</h2>
      <Card className={`${classes.background} ${classes.text} ${classes.borderGreen} ${classes.shadow} ${classes.transition} p-6 rounded-lg`}>
        <Textarea
          placeholder="Leave your feedback or suggestions..."
          className={`${classes.background} ${classes.text}`}
          style={{
            backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff', // Custom background
            color: theme === 'dark' ? '#ffffff' : '#000000', // Custom text color
            borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db', // Border color adjustment
          }}
        />
        <Button
          variant="primary"
          color="purple"
          onClick={() =>
            window.open('mailto:fcventer17@gmail.com?subject=Feedback&body=Your feedback here...')
          }
        >
          Send Feedback
        </Button>
      </Card>
    </section>
  );
};

export default FeedbackSection;
