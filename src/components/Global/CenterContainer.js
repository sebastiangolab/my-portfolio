import styled from 'styled-components';

const CenterCotainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;

  @media (max-width: 1199px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export default CenterCotainer;