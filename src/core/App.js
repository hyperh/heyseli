import React from 'react';
import { Route } from 'react-router-dom';
import styles from './App.scss';
import Sidebar from './Sidebar';
import Content from './Content';
import Contact from '../contact/Contact';

const App = () => (
  <div className={styles.app}>
    <Sidebar />
    <Content>
      <Route path="/" component={Contact} />
    </Content>
  </div>
);

export default App;
