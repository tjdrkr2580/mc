import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 10px;
        font-family: "Pretendard Variable";
        transition: 0.25s letter-spacing, 0.25s filter, 0.25s background-color;
    }
    body {
        overflow-x: hidden;
    }
    button {
        border-radius: 1rem;
        cursor: pointer;
        background-color: transparent;
        font-size: 1.4rem;
        border: none;
        font-weight: 500;
        padding: 0.6rem 0.8rem;
    }
`;
