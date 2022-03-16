import styled from "styled-components";

const FrontContainer = styled.div`
    width: 100%;
    height: calc(100% - 105px);
    padding-bottom: 70px;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 767px) {
        padding-bottom: 100px;
    }

    @media (max-width: 575px) {
        padding-bottom: 0;
    }
`;

export default FrontContainer;