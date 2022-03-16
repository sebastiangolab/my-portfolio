import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 12px 5px;
  background-color: ${({ theme }) => theme.colors.greyBackground};
  width: 100%;

  p {
    font-size: 13px;
  }
`;
