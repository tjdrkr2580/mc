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
        overflow: hidden;
    }
`;
