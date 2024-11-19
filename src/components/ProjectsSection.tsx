import { useRef, useState, useEffect, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import { getThemeClasses } from '../theme/themeConfig';

interface ProjectsSectionProps {
  theme: 'dark' | 'light';
}

interface DragStart {
  x: number;
  scrollLeft: number;
}

const useDragScroll = (ref: React.RefObject<HTMLDivElement>) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<DragStart>({ x: 0, scrollLeft: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - rect.left,
      scrollLeft: ref.current.scrollLeft,
    });

    // Prevent default behavior to avoid text selection
    e.preventDefault();
  }, [ref]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - dragStart.x) * 1.5; // Adjust scroll speed multiplier
    ref.current.scrollLeft = dragStart.scrollLeft - walk;
  }, [isDragging, dragStart, ref]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return {
    isDragging,
    handleMouseDown,
  };
};

const ProjectsSection = ({ theme }: ProjectsSectionProps) => {
  const completedRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLDivElement>(null);
  const classes = getThemeClasses(theme);

  const completedHandlers = useDragScroll(completedRef);
  const currentHandlers = useDragScroll(currentRef);

  const completedProjects = [
    {
      title: "Fullstack Web Portal with RBAC",
      technologies: "MERN Stack, TypeScript, Docker, Azure",
      features: "Role-based access control, Document management, Moderation tools",
      link: ""
    },
    {
      title: "Airbnb Data Analysis",
      technologies: "Python, PostgreSQL",
      features: "Data cleaning, Statistical analysis, Visualization",
      link: "https://github.com/FCVenter/Airbnb-Data-Analysis"
    },
    {
      title: "Supermarket Inventory Management System",
      technologies: "C#, MS SQL Server",
      features: "Inventory Tracking, Sales Reporting, Automatic Re-Ordering",
      link: "https://github.com/FCVenter/Supermarket-Inventory-Management-System"
    },
    {
      title: "Real-Time Chat App",
      technologies: "Python",
      features: "Individual and group chat, Real-time messaging",
      link: "https://github.com/FCVenter/Python-Chat-app"
    },
    {
      title: "Company Network Simulation",
      technologies: "CISCO Packet Tracer",
      features: "Network Design, Security, VLAN isolation, DHCP Relay",
      link: "https://github.com/FCVenter/CISCO-Packet-Tracer-Company-Network"
    },
    {
      title: "AES and Custom Encryption in Python",
      technologies: "Python",
      features: "AES Encryption, Custom encryption algorithms",
      link: "https://github.com/FCVenter/Encryption"
    },
    {
      title: "Coffee Shop Inventory Management System",
      technologies: "C#, MS SQL Server",
      features: "Inventory Control, Point Of Sale",
      link: "https://github.com/FCVenter/Coffee-Shop-Inventory-Management-System"
    },
    {
      title: "Web-based Library Information System",
      technologies: "ASP.NET",
      features: "Book cataloging, Cookie storage",
      link: "https://github.com/FCVenter/Web-based-Library-information-system"
    },
  ];

  const currentProjects = [
    {
      title: "International Booking System",
      technologies: "Flutter, Firebase",
      features: "Secure Payments, Heavy Traffic"
    },
    {
      title: "Narrative Aptitude Test for Children",
      technologies: "Flutter, Firebase",
      features: "Educational tool, Used nationwide"
    },
    {
      title: "Live Market Data App for Business",
      technologies: "React Native, API Integration",
      features: "Real-time market data, Customized for farming industry"
    },
    {
      title: "Dynamic PowerPoint Builder",
      technologies: "C#, .NET",
      features: "Dynamic Slide creation, API Integration"
    },
  ];

  return (
    <section className={`projects p-8 text-center ${classes.background} ${classes.text}`}>
      <h2 className="text-3xl font-semibold">Projects</h2>

      {/* Completed Projects Section */}
      <h3 className="text-2xl mt-6">Completed</h3>
      <div
        ref={completedRef}
        className="overflow-x-auto flex space-x-4 mt-4 no-scrollbar cursor-grab px-4"
        onMouseDown={completedHandlers.handleMouseDown}
        style={{ cursor: completedHandlers.isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
      >
        {completedProjects.map((project, index) => (
          <ProjectCard
            theme = {theme}
            key={index}
            title={project.title}
            technologies={project.technologies}
            features={project.features}
            link={project.link}
          />
        ))}
      </div>

      {/* Current Projects Section */}
      <h3 className="text-2xl mt-6">Current</h3>
      <div
        ref={currentRef}
        className="overflow-x-auto flex space-x-4 mt-4 no-scrollbar cursor-grab px-4"
        onMouseDown={currentHandlers.handleMouseDown}
        style={{ cursor: currentHandlers.isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
      >
        {currentProjects.map((project, index) => (
          <ProjectCard
            theme = {theme}
            key={index}
            title={project.title}
            technologies={project.technologies}
            features={project.features}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
