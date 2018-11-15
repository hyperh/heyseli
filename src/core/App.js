import React from 'react';
import { Route } from 'react-router-dom';
import styles from './App.scss';
import Sidebar from './Sidebar';
import Content from './Content';
import Contact from '../contact/Contact';
import Resume from '../resume/Resume';

const App = () => (
  <div className={styles.app}>
    <Sidebar />
    <Content>
      <Route path="/" component={Contact} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/resume" component={Resume} exact />
    </Content>
  </div>
);

export default App;
