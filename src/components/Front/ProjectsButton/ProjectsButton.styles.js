import styled from 'styled-components';

export const Wrapper = styled.a`
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: -95px;
  bottom: 120px;
  transform: rotate(-90deg);
  transition: bottom 0.5s;

  &::before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    margin-right: 20px;
  }

  &:hover {
    bottom: 135px;
  }

  @media (max-width: 991px) {
    font-size: 23px;
    left: -80px;
    bottom: 110px;

    &::before {
      width: 70px;
      margin-right: 15px;
    }

    &:hover {
      bottom: 125px;
    }
  }

  @media (max-width: 767px) {
    font-size: 20px;
    left: -73px;
    bottom: 100px;

    &::before {
      width: 55px;
    }

    &:hover {
      bottom: 115px;
    }
  }

  @media (max-width: 575px) {
    font-size: 20px;
    transform: none;
    left: 0;
    bottom: 15px;
    transition: left 0.5s;

    &::before {
      width: 40px;
      margin-right: 10px;
    }

    &:hover {
      bottom: 15px;
      left: 15px;
    }
  }
`;
