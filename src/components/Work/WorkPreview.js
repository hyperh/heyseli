import React, { PropTypes } from 'react';

import styles from './WorkPreview.scss';

const side = '150';
const WorkPreview = ({ name, platform }) => (
  <div className={styles.wrapper}>
    <img width={side} height={side} alt={name} />
    <div>{name}</div>
    <div>{platform}</div>
  </div>
);

WorkPreview.propTypes = {
  name: PropTypes.string.isRequired,
  platform: PropTypes.string,
};

export default WorkPreview;
