import { Wrapper, Container } from './SectionContainer.styles';

const SectionContainer = ({
  children,
  afterElement = false,
  isGrey = false,
  scrollId,
}) => (
  <Wrapper isGrey={isGrey} id={scrollId}>
    <Container>{children}</Container>
    {afterElement && afterElement}
  </Wrapper>
);

export default SectionContainer;
