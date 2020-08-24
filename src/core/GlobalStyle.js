import { createGlobalStyle } from 'styled-components';
import { headerFont } from './fonts';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${headerFont}, serif;
    margin: 0;
    height: 100%;
    width: 100%;
    font-weight: 300;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body.light-mode {
    --secondaryText: rgba(0, 0, 0, 0.54);

    background-color: #fff;
    color: #333;

    a {
      color: blue;
      &:visited {
        color: red;
      }
    }
  }
  body.dark-mode {
    --secondaryText: pink;

    background-color: #1a1919;
    color: #999;

    a {
      color: yellow;
      &:visited {
        color: green;
      }
    }
  }

  /* To make sure padding doesn't change size of elements */
  /* https://css-tricks.com/box-sizing/ */
  html {
    box-sizing: border-box; 
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  /* // end */
`;

export default GlobalStyle;
