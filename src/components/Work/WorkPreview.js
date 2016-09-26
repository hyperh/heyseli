import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './WorkPreview.scss';

const side = '150';
const WorkPreview = ({ name, platform }) => (
  <div className={styles.wrapper}>
    <Link to={`work/${name.replace(' ', '-')}`}><img width={side} height={side} alt={name} /></Link>
    <div>{name}</div>
    <div>{platform}</div>
  </div>
);

WorkPreview.propTypes = {
  name: PropTypes.string.isRequired,
  platform: PropTypes.string,
};

export default WorkPreview;
