import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, #root, body{
        width: 100%;
        height: 100%;
        background: #121212;
        color: #fff;
    }

    body, button{
        font-family: 'Inter', sans-serif;
    }

    a{
        text-decoration: none;
        color: #fff;
    }
`;
