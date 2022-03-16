import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 0 15px;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ isGrey, theme }) =>
    isGrey ? theme.colors.greyBackground : '#fff'};

  @media (max-width: 575px) {
    min-height: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1760px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;

  @media (max-width: 575px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
