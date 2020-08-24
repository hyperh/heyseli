import { createGlobalStyle } from 'styled-components';
import { headerFont } from './fonts';

const Colors = {
  DARK_GREY: '#111010',
  GREY_60: '#999999', // 60 is the lightness
  GREY_20: '#333333',
  GREY_TEXT_SECONDARY: 'rgba(0, 0, 0, 0.54)',
  YELLOW: '#E8BE1B',
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
    --backgroundColor: white;
    --secondaryText: ${Colors.GREY_TEXT_SECONDARY};

    background-color: var(--backgroundColor);
    color: ${Colors.GREY_20};

    a {
      color: blue;

      &:visited {
        color: blue;
      }
    }
  }
  body.dark-mode {
    --backgroundColor: ${Colors.DARK_GREY};
    --secondaryText: ${Colors.GREY_60};

    background-color: var(--backgroundColor);
    color: ${Colors.GREY_60};

    a {
      color: ${Colors.YELLOW};
      
      &:visited {
        color: ${Colors.YELLOW};
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
