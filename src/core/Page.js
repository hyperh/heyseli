import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';
import { headerFont } from './fonts';
import useDarkMode from 'use-dark-mode';

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
    }

    a:visited {
      color: red;
    }
  }
  body.dark-mode {
    --secondaryText: pink;

    background-color: #1a1919;
    color: #999;

    a {
      color: yellow;
    }

    a:visited {
      color: green;
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
    <>
      <GlobalStyle />
      <Wrapper>
        <div>
          <Sidebar />
          <button onClick={darkMode.toggle}>Toggle</button>
        </div>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
