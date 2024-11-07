// src/sections/Projects.tsx
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Text from '../components/styled/Typography';

const ProjectsContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xLarge} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};


  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small};
  }
`;

const Heading = styled(Text).attrs({ variant: 'h2' })`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.primary};

`;

const SubHeading = styled(Text).attrs({ variant: 'h3' })`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xLarge};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.secondary};

`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  
`;

const Projects: React.FC = () => (
  <ProjectsContainer>
    <Heading>Projects</Heading>
    <SubHeading>Completed Projects</SubHeading>
    <ProjectsWrapper>
      <ProjectCard
        name="Airbnb Data Analysis"
        technologies={['Python', 'PostgreSQL']}
        features={['Data cleaning', 'Statistical analysis', 'Visualization']}
        githubLink="https://github.com/FCVenter/Airbnb-Data-Analysis"
      />
      <ProjectCard
        name="Fullstack Web Portal with RBAC"
        technologies={['MERN Stack', 'TypeScript', 'Docker', 'Azure']}
        features={[
          'Role-based access control',
          'Document uploading/downloading',
          'Moderation tools',
          'Document conversion',
        ]}
        // No GitHub link as it's private intellectual property
      />
      <ProjectCard
        name="Cartoon Information System"
        technologies={['Delphi', 'MS Access']}
        features={['Data management', 'User-friendly interface']}
        githubLink="https://github.com/FCVenter/Cartoon-Information-System"
      />
      <ProjectCard
        name="Supermarket Inventory Management System"
        technologies={['C#', 'MS SQL Server']}
        features={['Inventory tracking', 'Sales reporting']}
        githubLink="https://github.com/FCVenter/Supermarket-Inventory-Management-System"
      />
      <ProjectCard
        name="Web-based Library Information System"
        technologies={['ASP.NET']}
        features={['Book cataloging', 'User account management']}
        githubLink="https://github.com/FCVenter/Web-based-Library-information-system"
      />
      <ProjectCard
        name="AES and Custom Encryption in Python"
        technologies={['Python']}
        features={['AES encryption', 'Custom encryption algorithms']}
        githubLink="https://github.com/FCVenter/Encryption"
      />
      <ProjectCard
        name="Coffee Shop Inventory Management System"
        technologies={['C#', 'MS SQL Server']}
        features={['Inventory control', 'Point of sale']}
        githubLink="https://github.com/FCVenter/Coffee-Shop-Inventory-Management-System"
      />
      <ProjectCard
        name="Python Real-time Chat App"
        technologies={['Python']}
        features={['Individual and group chat', 'Real-time messaging']}
        githubLink="https://github.com/FCVenter/Python-Chat-app"
      />
      <ProjectCard
        name="Company Network Simulation/Planning"
        technologies={['Cisco Packet Tracer']}
        features={['Network design', 'Simulation and planning']}
        githubLink="https://github.com/FCVenter/CISCO-Packet-Tracer-Company-Network"
      />
    </ProjectsWrapper>

    <SubHeading>Current Projects</SubHeading>
    <ProjectsWrapper>
      <ProjectCard
        name="International Booking System"
        technologies={['Flutter', 'Firebase']}
        features={['Payments integration', 'Security features']}
      />
      <ProjectCard
        name="Narrative Aptitude Test for Children"
        technologies={['Python', 'Data Analysis']}
        features={['Educational tool', 'Used nationwide']}
      />
      <ProjectCard
        name="Live Market Data App for Business"
        technologies={['React Native', 'API Integration']}
        features={['Real-time market data', 'Customized for farming industry']}
      />
      <ProjectCard
        name="Dynamic PowerPoint Builder"
        technologies={['C#', '.NET']}
        features={[
          'Dynamic slide creation',
          'Insert songs and verses',
          'User-friendly menus',
        ]}
      />
    </ProjectsWrapper>
  </ProjectsContainer>
);

export default Projects;
