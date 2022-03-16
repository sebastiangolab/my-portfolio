import SectionContainer from 'components/Global/SectionContainer/SectionContainer';
import { useEffect, useState } from 'react';
import { StyledTitle, ProjectsList } from './ProjectsSection.styles';
import { fetchProjects } from 'helpers/fetchProjects';
import Project from './Project/Project';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects(setProjects);
  }, []);

  return (
    <SectionContainer>
      <StyledTitle>Projects</StyledTitle>
      <ProjectsList>
        {projects?.map((project, index) => (
          <Project key={`${index} - ${project.title}`} {...project} />
        ))}
      </ProjectsList>
    </SectionContainer>
  );
};

export default ProjectsSection;
