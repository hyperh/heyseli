import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';
import { headerFont } from './fonts';
import useDarkMode from 'use-dark-mode';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${headerFont}, serif;
    margin: 0;
    height: 100%;
    width: 100%;
    color: rgba(0, 0, 0, 87);
    font-weight: 300;
  }

  body.light-mode {
    background-color: #fff;
    color: #333;
    transition: all 0.3s ease;
  }
  body.dark-mode {
    background-color: #1a1919;
    color: #999;
    transition: all 0.3s ease;
  }

  a:visited {
    color: green;
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

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const Page = ({ children }) => {
  const darkMode = useDarkMode(false);

  return (
    <ThemeProvider theme={darkMode.value ? theme.dark : theme.light}>
      <GlobalStyle />
      <Wrapper>
        <div>
          <Sidebar />
          <button onClick={darkMode.toggle}>Toggle</button>
        </div>
        <Content>{children}</Content>
      </Wrapper>
    </ThemeProvider>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
