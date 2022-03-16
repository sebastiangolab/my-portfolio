import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;

  div {
    display: flex;
  }

  p {
    font-size: 53px;
    line-height: 50px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};

    &:last-child {
      padding-top: 25px;
    }
  }

  @media (max-width: 991px) {
    width: 80px;
    height: 80px;
    border: 2px solid ${({ theme }) => theme.colors.black};

    p {
      font-size: 45px;
    }
  }

  @media (max-width: 767px) {
    width: 52px;
    height: 52px;

    p {
      font-size: 30px;

      &:last-child {
        padding-top: 15px;
      }
    }
  }
`;
