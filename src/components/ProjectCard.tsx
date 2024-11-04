// src/components/ProjectCard.tsx
import React from 'react';
import styled from 'styled-components';

interface ProjectCardProps {
  name: string;
  technologies: string[];
  features: string[];
  githubLink?: string;
}

const ProjectContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  max-width: 600px;
  flex: 1;

  @media (max-width: 768px) {
    max-width: 80%;
    margin: 15px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 10px;
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 0;

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const TechList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const FeatureList = styled.ul`
  list-style-type: circle;
  padding-left: 20px;
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  features,
  githubLink,
}) => (
  <ProjectContainer>
    <ProjectTitle>{name}</ProjectTitle>
    <h4>Technologies Used:</h4>
    <TechList>
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </TechList>
    <h4>Features:</h4>
    <FeatureList>
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </FeatureList>
    {githubLink && (
      <LearnMoreButton href={githubLink} target="_blank" rel="noopener noreferrer">
        Learn More
      </LearnMoreButton>
    )}
  </ProjectContainer>
);

export default ProjectCard;
