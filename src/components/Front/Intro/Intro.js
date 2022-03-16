import { Wrapper } from './Intro.styles';
import Slider from 'components/Front/Slider/Slider';

const Intro = () => {
  return (
    <Wrapper>
      <h1>Hi I’m Sebastian Gołąb</h1>
      <p>I do some programming in</p>
      <Slider />
    </Wrapper>
  );
};

export default Intro;
