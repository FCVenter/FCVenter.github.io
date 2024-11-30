// RoadmapSection.tsx
import React from "react";
import { motion } from "framer-motion";
import CustomCard from "./CustomCard";
import { getThemeClasses } from "../theme/themeConfig";

interface RoadmapSectionProps {
  theme: "dark" | "light";
}

interface Milestone {
  date: string;
  title: string;
  description: string;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ theme }) => {
  const classes = getThemeClasses(theme);

  const milestones: Milestone[] = [
    {
      date: "Q1 2023",
      title: "AES and Custom Encryption in Python",
      description: `Technologies: Python. Features: AES Encryption, Custom Encryption Algorithms.`,
    },
    {
      date: "Q1 2023",
      title: "Web-based Library Information System",
      description: `Technologies: ASP.NET. Features: Book Cataloging, Cookie Storage.`,
    },
    {
      date: "Q2 2023",
      title: "Coffee Shop Inventory Management System",
      description: `Technologies: C#, MS SQL Server. Features: Inventory Control, Point Of Sale.`,
    },
    {
      date: "Q4 2023",
      title: "Supermarket Inventory Management System",
      description: `Technologies: C#, MS SQL Server. Features: Inventory Tracking, Sales Reporting, Automatic Re-Ordering.`,
    },
    {
      date: "Q1 2024",
      title: "Company Network Simulation",
      description: `Technologies: CISCO Packet Tracer. Features: Network Design, Security, VLAN Isolation, DHCP Relay.`,
    },
    {
      date: "Q1 2024",
      title: "Real-Time Chat App",
      description: `Technologies: Python. Features: Individual and Group Chat, Real-time Messaging.`,
    },
    {
      date: "Q3 2024",
      title: "Airbnb Data Analysis",
      description: `Technologies: Python, PostgreSQL. Features: Data Cleaning, Statistical Analysis, Visualization.`,
    },
    {
      date: "Q4 2024",
      title: "International Booking System for Business",
      description: `Technologies: Flutter, Firebase. Features: Secure Payments, Heavy Traffic Handling.`,
    },
    {
      date: "Q4 2024",
      title: "Fullstack Web Portal with RBAC",
      description: `Technologies: MERN Stack, TypeScript, Docker, Azure. Features: Role-based Access Control, Document Management, Moderation Tools.`,
    },
    {
      date: "Current",
      title: "Live Projects",
      description: `Ongoing Development: Various Technologies. Features: Continuous Integration, Real-time Updates.`,
    },
  ];
  
  // Animation variants for milestones
  const milestoneVariants = {
    hidden: { opacity: 0, x: theme === "dark" ? -100 : 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.0, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section id="roadmap"
      className={`roadmap-section ${classes.spacing.padding.extraLarge} ${classes.typography.textAlignCenter} ${classes.background} ${classes.text}`}
    >
      <h2
        className={`${classes.textSizes.heading} ${classes.typography.fontSemibold} ${classes.typography.marginBottom.large}`}
      >
        Roadmap
      </h2>
      <div className="relative container mx-auto">
        {/* Vertical timeline line - Hidden on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 dark:border-gray-700 hidden md:block"></div>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={index}
              variants={milestoneVariants}
            >
              {/* Timeline Indicator */}
              <div className="w-full md:w-1/2 px-4 flex justify-center md:justify-end">
                {index % 2 !== 0 && (
                  <div className="hidden md:flex justify-end">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                )}
                {/* Mobile: Date Indicator Above the Card */}
                <div className="flex md:hidden mb-2">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.date}
                  </div>
                </div>
              </div>

              {/* Milestone Card */}
              <div className="w-full md:w-1/2 px-4">
                <CustomCard
                  theme={theme}
                  bordered={true}
                  borderColour={classes.borderPurple}
                  color={theme === "dark" ? "gray-800" : "white"}
                  radius="lg"
                  shadow="md"
                  size="base"
                  withDivider={false}
                  className="relative"
                >
                  {/* Desktop: Date Indicator Inside the Card */}
                  <div className="hidden md:block absolute top-4 -left-7 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-md text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </CustomCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
