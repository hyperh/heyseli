import { createGlobalStyle } from 'styled-components';
import { headerFont } from './fonts';

const Colors = {
  DARK_GREY: '#1a1919',
  GREY_60: '#999999', // 60 is the lightness
  GREY_20: '#333333',
  GREY_TEXT: 'rgba(0, 0, 0, 0.54)',
};

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
    --secondaryText: ${Colors.GREY_TEXT};

    background-color: white;
    color: ${Colors.GREY_20};

    a {
      color: blue;

      &:visited {
        color: red;
      }
    }
  }
  body.dark-mode {
    --secondaryText: pink;

    background-color: ${Colors.DARK_GREY};
    color: ${Colors.GREY_60};

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
