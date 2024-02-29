import { createGlobalStyle } from "styled-components";

import { BREAKPOINTS } from "@/styles/breakpoints";

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Poppins', serif;
}

:root {
    width: 100%;
    height: 100vh;

    font-size: 16px;
    
    @media(max-width: ${BREAKPOINTS.MD}){
        font-size: 12px;
    }
}

body {
    background-color: ${({ theme }) => theme.COLORS.Dark_400};
    color: ${({ theme }) => theme.COLORS.Light_100};
    font-size: 1rem;
    outline: none;
    -webkit-font-smoothing: antialiased;
}

a {
    text-decoration: none;
    
    &:visited {
        color:${({ theme }) => theme.COLORS.Light_100};
    }
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9)
}
`;
