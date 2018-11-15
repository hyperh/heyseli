import PropTypes from 'prop-types';
import React from 'react';

import styles from './Content.scss';

const Content = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

Content.propTypes = {
  children: PropTypes.object
};

export default Content;
