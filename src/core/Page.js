import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';
import { headerFont } from './fonts';

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

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Sidebar />
      <Content>{children}</Content>
    </Wrapper>
  </>
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
