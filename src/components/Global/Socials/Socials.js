import { Wrapper, Row } from './Socials.styles';
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

const Socials = (props) => (
  <Wrapper {...props}>
    <div>
      <p>You can find me on</p>
      <Row>
        <a href="https://www.linkedin.com/in/sebastian-go%C5%82%C4%85b/">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/sebastiangolab">
          <FaGithubAlt />
        </a>
        <a href="https://www.instagram.com/seebastiangolab/">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/golomp1997/">
          <FaFacebookF />
        </a>
      </Row>
    </div>
  </Wrapper>
);

export default Socials;
