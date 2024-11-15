import { Card, Button } from '@rewind-ui/core';
import { FaSun, FaMoon } from 'react-icons/fa';

interface HeroSectionProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const HeroSection = ({ theme, toggleTheme }: HeroSectionProps) => (
  <section className="hero bg-gradient-to-r from-purple-600 to-green-500 text-white p-8 text-center">
    <div className="flex items-center justify-center mb-4">
      {/* Profile Card */}
      <Card className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg">
        <img src="./assets/me.jpg" alt="FC Venter" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-3xl font-bold mb-2">FC Venter</h1>
        <p className="text-lg mb-4">Software Developer</p>
        <Button
          onClick={toggleTheme}
          variant="secondary"
          color="purple"
          className="flex items-center justify-center p-2"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
      </Card>
    </div>
    
    {/* Button to open CV in a new tab */}
    <Button
      as="a"
      href="/assets/CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      variant="primary"
      color="purple"
      shadow="base"
      className="mt-4"
    >
      View My CV
    </Button>
  </section>
);

export default HeroSection;
