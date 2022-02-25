import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    body {
        font-family: 'Roboto', sans-serif !important;
        box-sizing: content-box;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;