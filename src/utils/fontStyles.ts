import { createGlobalStyle } from "styled-components";


const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

  body {
    font-family: Rubik, sans-serif;
    margin: 0;
    padding: 0;
  };

  * {
    box-sizing: border-box;
  };
`

export default FontStyles;