import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: ${({ isContact }) => (isContact ? '0 !important' : '80px')};

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 1599px) {
    margin-right: 61px;
  }

  @media (max-width: 1399px) {
    margin-right: 41px;

    p {
      font-size: 27px;
    }
  }

  @media (max-width: 767px) {
    margin-right: 0;

    p {
      font-size: 23px;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 575px) {
    p {
      font-size: 21px;
      margin-bottom: 20px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  a {
    margin-left: 20px;
    margin-right: 20px;
  }

  svg {
    font-size: 27px;
    color: ${({ theme }) => theme.colors.black};
    transition: color 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.blackHover};
    }
  }

  @media (max-width: 1399px) {
    a {
      margin-left: 17px;
      margin-right: 17px;
    }
  }

  @media (max-width: 767px) {
    a {
      margin-left: 15px;
      margin-right: 15px;
    }

    svg {
      font-size: 25px;
    }
  }

  @media (max-width: 575px) {
    a {
      margin-left: 11px;
      margin-right: 11px;
    }

    svg {
      font-size: 18px;
    }
  }
`;
