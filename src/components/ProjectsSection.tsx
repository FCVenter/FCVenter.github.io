import ProjectCard from './ProjectCard';

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

const ProjectsSection = () => (
  <section className="projects p-8 text-center">
    <h2 className="text-3xl font-semibold">Projects</h2>
    
    {/* Completed Projects Section */}
    <h3 className="text-2xl mt-6">Completed</h3>
    <div className="overflow-x-auto flex space-x-4 mt-4 no-scrollbar">
      {completedProjects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title} 
          technologies={project.technologies} 
          features={project.features} 
          link={project.link} // Pass the GitHub link to ProjectCard
        />
      ))}
    </div>
    
    {/* Current Projects Section */}
    <h3 className="text-2xl mt-6">Current</h3>
    <div className="overflow-x-auto flex space-x-4 mt-4 no-scrollbar">
      {currentProjects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title} 
          technologies={project.technologies} 
          features={project.features}
        />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
