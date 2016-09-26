import React from 'react';

import styles from './Content.scss';

const Content = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default Content;
