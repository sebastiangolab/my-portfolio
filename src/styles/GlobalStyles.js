import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400&display=swap');

    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    body {
        font-family: 'Roboto', sans-serif !important;
        box-sizing: border-box;
        color: ${({ theme }) => theme.colors.black}
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black}
    }

    h1,
    h2,
    h3,
    p,
    a {
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        line-height: 1em;
    }

    button {
        font-family: 'Roboto', sans-serif !important;
    }
`;

export default GlobalStyles;
