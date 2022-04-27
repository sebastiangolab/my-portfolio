import SectionContainer from 'components/Global/SectionContainer/SectionContainer';
import Header from 'components/Front/Header/Header';
import FrontContainer from 'components/Front/FrontContainer/FrontContainer';
import Intro from 'components/Front/Intro/Intro';
import Socials from 'components/Global/Socials/Socials';
import ProjectsButton from 'components/Front/ProjectsButton/ProjectsButton';

const FrontSection = ({ scrollId }) => (
  <SectionContainer isGrey scrollId={scrollId}>
    <Header />
    <FrontContainer>
      <Intro />
      <Socials isAnimate />
    </FrontContainer>
    <ProjectsButton />
  </SectionContainer>
);

export default FrontSection;
