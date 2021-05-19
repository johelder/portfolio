import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        font-family: 'Poppins', sans-serif;
    }

    body {
        width: 100%;
        height: 100%;
    }

    body.active {
        overflow: hidden;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        background-color: #121214;
        width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #212025;
        border-radius: 2rem;
    }
`