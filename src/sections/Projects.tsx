// src/sections/Projects.tsx
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.section`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Heading = styled.h2`
  text-align: center;
`;

const SubHeading = styled.h3`
  text-align: center;
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
        githubLink="https://github.com/FCVenter/airbnb-data-analysis"
      />
      <ProjectCard
        name="Fullstack Web Portal with RBAC"
        technologies={['MERN Stack', 'TypeScript', 'Docker', 'Azure']}
        features={[
          'Role-based access control',
          'Document management',
          'Moderation tools',
        ]}
      />
      {/* Include all other completed projects */}
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
