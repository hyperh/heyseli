import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.scss';
import Sidebar from './Sidebar';
import Content from './Content';
import Contact from '../contact/Contact';
import Resume from '../resume/Resume';
import Publications from '../publications/Publications';
import Work from '../work/Work';
import WorkItem from '../work/WorkItem';

const App = () => (
  <Router>
    <div className={styles.app}>
      <Sidebar />
      <Content>
        <Route path="/" component={Contact} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/publications" component={Publications} exact />
        <Route path="/work" component={Work} exact />
        <Route path="/work/:link" component={WorkItem} exact />
      </Content>
    </div>
  </Router>
);

export default App;
