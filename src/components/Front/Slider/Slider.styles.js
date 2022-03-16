import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    font-size: 40px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 4px;

    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 40px;
      border-left: 1px solid ${({ theme }) => theme.colors.black};
      margin-right: 16px;
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
