import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 11px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.greyBackground};
    z-index: 9;
    padding-bottom: 20%;
    transition: transform 0.5s;
    transform: ${({ isVisible }) =>
      isVisible ? 'translateX(0)' : 'translateX(-100vw)'};
  }
`;

export const MenuLink = styled.a`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-left: 53px;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -7px;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.5s;
  }

  &:hover::after {
    width: 120%;
  }

  @media (max-width: 991px) {
    margin-left: 40px;
  }

  @media (max-width: 767px) {
    font-size: 22px;
    margin-bottom: 25px;
    margin-left: 0;
  }
`;

export const MobileMenuButton = styled.button`
  line-height: 1em;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  background-color: transparent;
  font-size: 16px;
  padding: 6px 17px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  display: none;

  @media (max-width: 767px) {
    display: ${({ isVisible }) => (isVisible ? 'none' : 'inline-block')};
  }
`;

export const MobileMenuCloseButton = styled.p`
  display: none;
  font-size: 30px;
  position: absolute;
  right: 15px;
  top: 5px;

  @media (max-width: 767px) {
    display: inline-block;
  }
`;
