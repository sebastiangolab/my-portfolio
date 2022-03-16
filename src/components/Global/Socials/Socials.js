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
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaGithubAlt />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaFacebookF />
        </a>
      </Row>
    </div>
  </Wrapper>
);

export default Socials;
