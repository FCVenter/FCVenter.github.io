import { motion, Variants } from "framer-motion";
import { getThemeClasses } from "../theme/themeConfig";

interface RoadmapSectionProps {
  theme: "dark" | "light";
}

interface Milestone {
  date: string;
  title: string;
  description: string;
}

const RoadmapSection = ({ theme }: RoadmapSectionProps) => {
  const classes = getThemeClasses(theme);
   const milestones: Milestone[] = [
     {
       date: "Q1 2021",
       title: "Company Network Simulation",
       description: `Technologies: CISCO Packet Tracer. Features: Network Design, Security, VLAN Isolation, DHCP Relay.`,
     },
     {
       date: "Q2 2021",
       title: "AES and Custom Encryption in Python",
       description: `Technologies: Python. Features: AES Encryption, Custom Encryption Algorithms.`,
     },
     {
       date: "Q3 2021",
       title: "Web-based Library Information System",
       description: `Technologies: ASP.NET. Features: Book Cataloging, Cookie Storage.`,
     },
     {
       date: "Q4 2021",
       title: "Coffee Shop Inventory Management System",
       description: `Technologies: C#, MS SQL Server. Features: Inventory Control, Point Of Sale.`,
     },
     {
       date: "Q1 2022",
       title: "Real-Time Chat App",
       description: `Technologies: Python. Features: Individual and Group Chat, Real-time Messaging.`,
     },
     {
       date: "Q2 2022",
       title: "Supermarket Inventory Management System",
       description: `Technologies: C#, MS SQL Server. Features: Inventory Tracking, Sales Reporting, Automatic Re-Ordering.`,
     },
     {
       date: "Q3 2022",
       title: "Airbnb Data Analysis",
       description: `Technologies: Python, PostgreSQL. Features: Data Cleaning, Statistical Analysis, Visualization.`,
     },
     {
       date: "Q4 2022",
       title: "Live Market Data App for Business",
       description: `Technologies: React Native, API Integration. Features: Real-time Market Data, Customized for Farming Industry.`,
     },
     {
       date: "Q1 2023",
       title: "Dynamic PowerPoint Builder",
       description: `Technologies: C#, .NET. Features: Dynamic Slide Creation, API Integration.`,
     },
     {
       date: "Q2 2023",
       title: "Narrative Aptitude Test for Children",
       description: `Technologies: Flutter, Firebase. Features: Educational Tool, Used Nationwide.`,
     },
     {
       date: "Q3 2023",
       title: "International Booking System",
       description: `Technologies: Flutter, Firebase. Features: Secure Payments, Heavy Traffic Handling.`,
     },
     {
       date: "Q4 2023",
       title: "Fullstack Web Portal with RBAC",
       description: `Technologies: MERN Stack, TypeScript, Docker, Azure. Features: Role-based Access Control, Document Management, Moderation Tools.`,
     },
     {
       date: "Current",
       title: "Live Projects",
       description: `Ongoing Development: Various Technologies. Features: Continuous Integration, Real-time Updates.`,
     },
   ];

  const timelineHeight = milestones.length * 150;

  // Define variants with explicit types using Framer Motion's Variants
  const lineVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const circleVariants: Variants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        delay: i * 0.3 + 0.2,
        duration: 0.4,
        ease: "backOut",
      },
    }),
  };

  return (
    <section className={`${classes.spacing.padding.large}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold mb-8"
      >
        Roadmap
      </motion.h2>

      <div className="relative">
        <motion.svg
          width="4"
          height={timelineHeight}
          viewBox={`0 0 4 ${timelineHeight}`}
          className="absolute left-1/2 transform -translate-x-1/2"
          initial="hidden"
          animate="visible"
        >
          <motion.line
            x1="2"
            y1="0"
            x2="2"
            y2={timelineHeight}
            stroke="#00cc88"
            strokeWidth="4"
            variants={lineVariants}
          />
        </motion.svg>

        {milestones.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item flex items-start mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={itemVariants}
            custom={index}
          >
            <motion.div
              className="circle w-4 h-4 bg-green-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
              variants={circleVariants}
              custom={index}
              style={{ top: index * 150 }}
            />
            <div className="content ml-8">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;
