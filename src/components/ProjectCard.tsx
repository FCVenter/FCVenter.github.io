// src/components/ProjectCard.tsx
import React from 'react';
import styled from 'styled-components';
import Text from './styled/Typography';
import Button from './styled/Button';
import FlexContainer from './styled/Container';

interface ProjectCardProps {
  name: string;
  technologies: string[];
  features: string[];
  githubLink?: string;
}



const ProjectContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0.9375rem; /* 15px */
  padding: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.medium};
  max-width: 37.5rem; /* 600px */
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 24rem; /* 384px */
    margin: ${({ theme }) => theme.spacing.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    margin: ${({ theme }) => theme.spacing.small} 0;
  }
`;

const ProjectTitle = styled(Text).attrs({ variant: 'h3' })`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({theme}) => theme.colors.background}
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem; /* 20px */
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const LearnMoreButton = styled(Button)`
  padding: 0.625rem 1.25rem; /* 10px 20px */
  font-size: ${({ theme }) => theme.fontSizes.mobile};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.tablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.laptop};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.desktop};
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  features,
  githubLink,
}) => (
  <ProjectContainer>
    <ProjectTitle>{name}</ProjectTitle>
    <Text variant="h4">Technologies Used:</Text>
    <List>
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </List>
    <Text variant="h4">Features:</Text>
    <List>
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </List>
    {githubLink && (
      <LearnMoreButton
        as="a"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        aria-label={`Learn more about ${name}`}
      >
        Learn More
      </LearnMoreButton>
    )}
  </ProjectContainer>
);

export default ProjectCard;
