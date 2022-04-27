import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 33px;
  animation: showElement 0.7s ease-in-out;

  @keyframes showElement {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 991px) {
    padding-top: 25px;
  }

  @media (max-width: 767px) {
    padding-top: 15px;
    align-items: center;
  }
`;
