import { getThemeClasses } from '../theme/themeConfig';

interface FooterProps {
  theme: 'dark' | 'light';
}

const Footer = ({ theme }: FooterProps) => {
  const classes = getThemeClasses(theme);

  return (
    <footer
      className={`footer p-4 text-center ${classes.background} ${classes.text}`}
    >
      <p>© 2024 FC Venter. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
