import SectionContainer from 'components/Global/SectionContainer/SectionContainer';
import Header from 'components/Front/Header/Header';
import FrontContainer from 'components/Front/FrontContainer/FrontContainer';
import Intro from 'components/Front/Intro/Intro';
import Socials from 'components/Global/Socials/Socials';
import ProjectsButton from 'components/Front/ProjectsButton/ProjectsButton';

const FrontSection = () => (
  <SectionContainer isGrey>
    <Header />
    <FrontContainer>
      <Intro />
      <Socials />
    </FrontContainer>
    <ProjectsButton />
  </SectionContainer>
);

export default FrontSection;
