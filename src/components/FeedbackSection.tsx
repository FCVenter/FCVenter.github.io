import { useState } from "react";
import { Card, Textarea, Button } from "@rewind-ui/core";
import { getThemeClasses } from "../theme/themeConfig";
import emailjs from "emailjs-com";

interface FeedbackSectionProps {
  theme: "dark" | "light";
}

const FeedbackSection = ({ theme }: FeedbackSectionProps) => {
  const classes = getThemeClasses(theme);

  // States for form data and feedback
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_jh6tskm",
        "template_iddjv9g",
        formData,
        "k3Pxt79l9fUQxemFm"
      )
      .then(() => {
        setSuccessMessage("Your feedback has been sent successfully!");
        setFormData({ from_name: "", from_email: "", message: "" }); // Clear the form
      })
      .catch((error) => {
        console.error("Failed to send feedback:", error);
        alert("There was an issue sending your feedback. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="feedback">
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.medium} ${classes.typography.textAlignCenter} ${classes.text}`}
      >
        Feedback
      </h2>
      <Card
        className={`${classes.background} ${classes.text} ${classes.borderGreen} ${classes.shadow} ${classes.transition} ${classes.spacing.padding.large} ${classes.spacing.rounded.large}`}
      >
        <form onSubmit={handleSubmit}>
          <div className={`${classes.typography.marginBottom.medium}`}>
            <label
              className={`${classes.typography.displayBlock} ${classes.typography.marginBottom.small} ${classes.textSizes.subheading}`}
            >
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleInputChange}
              required
              className={`w-full ${classes.spacing.padding.small} ${classes.spacing.rounded.medium} ${classes.textSizes.body} ${classes.background} ${classes.text}`}
              placeholder="Enter your name"
            />
          </div>
          <div className={`${classes.typography.marginBottom.medium}`}>
            <label
              className={`${classes.typography.displayBlock} ${classes.typography.marginBottom.small} ${classes.textSizes.subheading}`}
            >
              Email
            </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleInputChange}
              required
              className={`w-full ${classes.spacing.padding.small} ${classes.spacing.rounded.medium} ${classes.textSizes.body} ${classes.background} ${classes.text}`}
              placeholder="Enter your email"
            />
          </div>
          <div className={`${classes.typography.marginBottom.medium}`}>
            <label
              className={`${classes.typography.displayBlock} ${classes.typography.marginBottom.small} ${classes.textSizes.subheading}`}
            >
              Message
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Enter your feedback"
              className={`w-full ${classes.spacing.padding.small} ${classes.spacing.rounded.medium} ${classes.textSizes.body} ${classes.background} ${classes.text}`}
              style={{
                backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
                color: theme === "dark" ? "#ffffff" : "#000000",
                borderColor: theme === "dark" ? "#4b5563" : "#d1d5db",
              }}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            color="purple"
            disabled={isSending}
            className={`${classes.textSizes.body}`}
          >
            {isSending ? "Sending..." : "Send Feedback"}
          </Button>
          {successMessage && (
            <p
              className={`${classes.typography.marginTop.large} ${classes.textSizes.body} text-green-500`}
            >
              {successMessage}
            </p>
          )}
        </form>
      </Card>
    </section>
  );
};

export default FeedbackSection;
