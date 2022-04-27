import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    font-size: 40px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    display: inline-block;
    padding-left: 4px;
    animation: slideInFromLeft 4s ease-in-out infinite;

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-300px);
        opacity: 0;
      }
      10% {
        transform: translateX(-300px);
        opacity: 0;
      }
      20% {
        transform: translateX(0);
        opacity: 1;
      }
      90% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(-300px);
        opacity: 0;
      }
    }
  }

  @media (max-width: 1599px) {
    h2 {
      font-size: 35px;
    }
  }

  @media (max-width: 1399px) {
    h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 25px;

      &::before {
        height: 30px;
        margin-right: 13px;
      }
    }
  }

  @media (max-width: 575px) {
    h2 {
      font-size: 19px;
      padding-left: 0;

      &::before {
        height: 22px;
        margin-right: 10px;
      }
    }
  }
`;

export const Line = styled.span`
  display: inline-block;
  width: 1px;
  height: 40px;
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  margin-right: 16px;
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;
