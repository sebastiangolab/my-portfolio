import styled from 'styled-components';

export const Content = styled.div`
  padding-left: 70px;
  padding-top: 50px;

  h3 {
    font-size: 22px;
    line-height: 1.4em;
    margin-top: 50px;
    margin-bottom: 10px;
  }

  p {
    font-size: 19px;
    line-height: 1.6em;
  }

  @media (max-width: 1199px) {
    padding-left: 60px;
    padding-top: 40px;

    h3 {
      font-size: 20px;
      line-height: 1.4em;
      margin-top: 40px;
      margin-bottom: 10px;
    }

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 767px) {
    padding-left: 0;
    padding-top: 25px;

    h3 {
      font-size: 19px;
      margin-top: 30px;
      margin-bottom: 6px;
    }

    p {
      font-size: 16px;
    }
  }
`;
