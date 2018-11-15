import PropTypes from 'prop-types';
import React from 'react';

import styles from './App.scss';
// import Sidebar from './Sidebar';
import Content from './Content';

const App = ({ children }) => (
  <div className={styles.app}>
    {/* <Sidebar /> */}
    <Content>{children}</Content>
  </div>
);

App.propTypes = {
  children: PropTypes.object
};

export default App;
