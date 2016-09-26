import React, { PropTypes } from 'react';

import styles from './Content.scss';

const Content = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.object,
};

export default Content;
