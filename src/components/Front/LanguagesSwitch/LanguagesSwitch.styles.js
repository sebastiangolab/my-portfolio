import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  padding: 8px 16px;
  margin-left: 53px;

  a,
  p {
    font-size: 19px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1em;
  }

  p {
    margin-left: 3px;
    margin-right: 3px;
  }

  a {
    transition: color 0.5s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.blackHover};
  }

  @media (max-width: 991px) {
    margin-left: 40px;
  }

  @media (max-width: 767px) {
    margin-left: 0;
  }
`;
