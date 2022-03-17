import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    line-height: 1.5em;
    margin-bottom: 6px;
    transition: color 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.blackHover};
    }
  }

  @media (max-width: 991px) {
    h2 {
      margin-bottom: 5px;
      font-size: 18px;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  padding-bottom: 55.5%;
  position: relative;
  height: 0;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.5s;

    &:hover {
      transform: translate(-50%, -50%) scale(1.03);
    }
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 7px;

  p {
    font-size: 15px;
    line-height: 1.6em;
    flex: 1;
    
    strong {
      font-weight: 400;
    }
  }
`;
