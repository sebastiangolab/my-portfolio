import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 33px;

  @media (max-width: 991px) {
    padding-top: 25px;
  }

  @media (max-width: 767px) {
    padding-top: 15px;
    align-items: center;
  }
`;
