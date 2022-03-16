import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 162px;
  padding-bottom: 50px;

  h1 {
    display: inline-block;
    font-size: 60px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: 25px;
    padding-bottom: 3px;
    padding-top: 3px;
  }

  p {
    font-size: 45px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    margin-bottom: 28px;
  }

  @media (max-width: 1599px) {
    margin-left: 112px;

    h1 {
      font-size: 55px;
    }

    p {
      font-size: 40px;
    }
  }

  @media (max-width: 1399px) {
    margin-left: 82px;
  }

  @media (max-width: 1199px) {
    margin-left: 60px;

    h1 {
      font-size: 50px;
      margin-bottom: 23px;
    }

    p {
      font-size: 35px;
      margin-bottom: 26px;
    }
  }

  @media (max-width: 991px) {
    margin-left: 50px;
  }

  @media (max-width: 767px) {
    margin-left: 0;
    padding-bottom: 110px;

    h1 {
      font-size: 40px;
      margin-bottom: 18px;
    }

    p {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 575px) {
    h1 {
      font-size: 28px;
      margin-bottom: 13px;
    }

    p {
      font-size: 21px;
      margin-bottom: 15px;
    }
  }
`;
