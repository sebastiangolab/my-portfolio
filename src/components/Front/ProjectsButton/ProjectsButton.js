import { Wrapper } from './ProjectsButton.styles';

const ProjectsButton = () => (
  <Wrapper to="projects" spy={true} smooth={true} duration={500}>
    See projects
  </Wrapper>
);

export default ProjectsButton;
