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
`;
