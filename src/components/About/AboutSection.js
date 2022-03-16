import SectionContainer from 'components/Global/SectionContainer/SectionContainer';
import { Content } from './AboutSection.styles';
import Title from 'components/Global/Title';
import CenterCotainer from 'components/Global/CenterContainer';

const AboutSection = () => (
  <SectionContainer isGrey>
    <CenterCotainer>
        <Title isLeft>About me</Title>
        <Content>
            <p>Hi, my name is Sebastian and I have been programming professionally for 5 years. During this time, I have made many projects (about 40-50 websites) as well as some interesting projects at home. I am looking for a job as a frontend developer, where i will can work with interesting big projects. </p>
            
            <h3>Technologies that i know:</h3>
            <p>HTML5, CSS3 (Flexbox, CSS Grid), Javascript ES6+, PHP, React, Gatsby, Redux, React Native, REST API, GraphQL, Jest, Wordpress, Prestashop, Styled Components, Sass, Bootstrap, GIT, npm, Figma</p>
            
            <h3>Other Skills</h3>
            <p>SEO, WCAG, Figma, MS Office, managing social media, ability to work in a team </p>
        </Content>
    </CenterCotainer>
  </SectionContainer>
);

export default AboutSection;
