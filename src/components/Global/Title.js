import styled from 'styled-components';

const Title = styled.h2`
  font-size: 50px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: ${({ isLeft }) => (isLeft ? 'left' : 'center')};

  @media (max-width: 1599px) {
    font-size: 45px;
  }

  @media (max-width: 1199px) {
    font-size: 40px;
  }

  @media (max-width: 767px) {
    font-size: 30px;
  }

  @media (max-width: 575px) {
    font-size: 28px;
  }
`;

export default Title;
