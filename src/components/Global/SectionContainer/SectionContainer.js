import { Wrapper, Container } from './SectionContainer.styles';

const SectionContainer = ({
  children,
  afterElement = false,
  isGrey = false,
}) => (
  <Wrapper isGrey={isGrey}>
    <Container>{children}</Container>
    {afterElement && afterElement}
  </Wrapper>
);

export default SectionContainer;
