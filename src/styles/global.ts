import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --azul: #17328E;
        --azul-escuro: #3949AB;
        --azul-black: #00227B;
        --azul-legenda: #6F74DD;
        --black: #343434;
        --gray: #828282;
        --white-gray: #E6E9FA;
        --white: #FFFFFF;
        --background: #FFFFFF;
        --black-light: #343434;
        --gray-borda: #bdbebd;
    }

    // font-size: Padrão 16px
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }

    body {
        background: var(--background);
        //background: black;
        font-family: 'Poppins';
    }
`;
