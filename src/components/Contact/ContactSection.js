import { Content } from './ContactSection.styles';
import SectionContainer from 'components/Global/SectionContainer/SectionContainer';
import Title from 'components/Global/Title';
import CenterCotainer from 'components/Global/CenterContainer';
import Socials from 'components/Global/Socials/Socials';
import Footer from 'components/Contact/Footer/Footer';

const ContactSection = ({ scrollId }) => (
  <SectionContainer afterElement={<Footer />} scrollId={scrollId}>
    <CenterCotainer>
      <Title>Contact</Title>
      <Content>
        <a href="tel:+48886165556">+48 886 165 556</a>
        <a href="mailto:sebagolab97@gmail.com">sebagolab97@gmail.com</a>
        <Socials isContact />
      </Content>
    </CenterCotainer>
  </SectionContainer>
);

export default ContactSection;
