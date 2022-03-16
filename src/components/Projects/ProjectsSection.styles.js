import styled from 'styled-components';
import Title from 'components/Global/Title';

export const StyledTitle = styled(Title)`
  padding-top: 60px;
  margin-bottom: 60px;

  @media (max-width: 991px) {
    padding-top: 40px;
    margin-bottom: 40px;
  }
`;

export const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 58px;
  margin-bottom: 60px;

  @media (max-width: 1599px) {
    grid-gap: 45px 45px;
  }

  @media (max-width: 1399px) {
    grid-gap: 45px 30px;
  }

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
