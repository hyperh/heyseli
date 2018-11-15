import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';
import Contact from '../contact/Contact';
import Resume from '../resume/Resume';
import Publications from '../publications/Publications';
import Work from '../work/Work';
import WorkItem from '../work/WorkItem';
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
  <React.Fragment>
    <GlobalStyle />
    <Router>
      <Wrapper>
        <Sidebar />
        <Content>
          <Route path="/" component={Contact} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/publications" component={Publications} exact />
          <Route path="/work" component={Work} exact />
          <Route path="/work/:link" component={WorkItem} exact />
        </Content>
      </Wrapper>
    </Router>
  </React.Fragment>
);

export default App;
