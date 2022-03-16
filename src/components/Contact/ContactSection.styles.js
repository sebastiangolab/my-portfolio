import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 37px;

  a {
    font-size: 30px;
    margin-bottom: 45px;
    transition: color 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.blackHover};
    }
  }

  @media (max-width: 1399px) {
    a {
      font-size: 27px;
    }
  }

  @media (max-width: 767px) {
    a {
      font-size: 23px;
      margin-bottom: 35px;
    }
  }

  @media (max-width: 575px) {
    a {
      font-size: 21px;
      margin-bottom: 30px;
    }
  }
`;
