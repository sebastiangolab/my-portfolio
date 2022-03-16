import { Wrapper } from './Footer.styles';

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <Wrapper>
      <p>© {getCurrentYear()} Sebastian Gołąb. Wszelkie prawa zastrzeżone</p>
    </Wrapper>
  );
};

export default Footer;
