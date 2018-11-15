import React from 'react';
import { Route } from 'react-router-dom';
import styles from './App.scss';
import Sidebar from './Sidebar';
import Content from './Content';
import Contact from '../contact/Contact';
import Resume from '../resume/Resume';
import Publications from '../publications/Publications';
import Work from '../work/Work';

const App = () => (
  <div className={styles.app}>
    <Sidebar />
    <Content>
      <Route path="/" component={Contact} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/resume" component={Resume} exact />
      <Route path="/publications" component={Publications} exact />
      <Route path="/work" component={Work} exact />
    </Content>
  </div>
);

export default App;
