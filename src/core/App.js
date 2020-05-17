import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';
import { headerFont } from './fonts';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,400');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');

html,
body {
  font-family: ${headerFont}, serif;
  margin: 0;
  height: 100%;
  width: 100%;
  color: rgba(0, 0, 0, 87);
  font-weight: 300;
}

// To make sure padding doesn't change size of elements
html {
  box-sizing: border-box; // https://css-tricks.com/box-sizing/
}

*, *:before, *:after {
  box-sizing: inherit;
}
// end
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Sidebar />
      <Content>hello heyse</Content>
    </Wrapper>
  </>
);

export default App;
