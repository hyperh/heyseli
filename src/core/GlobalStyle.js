import { createGlobalStyle } from 'styled-components';

const Colors = {
  DARK_GREY: '#111010',
  GREY_60: '#999999', // 60 is the lightness
  GREY_20: '#333333',
  GREY_TEXT_SECONDARY: 'rgba(0, 0, 0, 0.54)',
  YELLOW: '#E8BE1B',
  TEAL: '#3AAFA9',
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body.light-mode {
    --backgroundColor: white;
    --primaryText: ${Colors.GREY_20};
    --secondaryText: ${Colors.GREY_TEXT_SECONDARY};

    background-color: var(--backgroundColor);
    color: var(--primaryText);

    a {
      color: ${Colors.TEAL};

      &:visited {
        color: ${Colors.TEAL};
      }
    }
  }
  body.dark-mode {
    --backgroundColor: ${Colors.DARK_GREY};
    --primaryText: ${Colors.GREY_60};
    --secondaryText: ${Colors.GREY_60};

    background-color: var(--backgroundColor);
    color: var(--primaryText);

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
