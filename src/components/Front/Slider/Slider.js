import { useEffect, useState } from 'react';
import { Wrapper, Line, Slide } from './Slider.styles';

const Slider = () => {
  const slidesTab = ['React', 'Javascript', 'Wordpress'];

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  useEffect(() => {
    const intervalIndex = setInterval(
      () =>
        setCurrentTabIndex((prevState) =>
          prevState < slidesTab.length - 1 ? prevState + 1 : 0
        ),
      4000
    );

    return () => clearInterval(intervalIndex);
  }, []);

  return (
    <Wrapper>
      <Slide>
        <Line></Line>
        <h2>{slidesTab[currentTabIndex]}</h2>
      </Slide>
    </Wrapper>
  );
};

export default Slider;
