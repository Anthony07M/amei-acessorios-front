import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #1F1F1F;
        --purple:#B550F8;
        --white: #FFFFFF;
        --black: #171717;
        --black-secondary: #1B1B1B;
        --grey-text: #8C8C8C;
        --red: #DD424C;
    }
    *{
        margin:0;
        padding: 0;
        border: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: 'Heebo';
    }
    
    main {
        display: none;
        @media (min-width: 750px) {
            display: initial;
        }
    }
    button:hover{
        cursor: pointer;
    }
`;
