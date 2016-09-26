import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './WorkPreview.scss';

const side = '150';
const WorkPreview = ({ name, platform, link }) => (
  <div className={styles.wrapper}>
    <Link to={`work/${link}`}>
      <img width={side} height={side} alt={name} />
    </Link>
    <div>{name}</div>
    <div>{platform}</div>
  </div>
);

WorkPreview.propTypes = {
  name: PropTypes.string.isRequired,
  platform: PropTypes.array,
  link: PropTypes.string,
};

export default WorkPreview;
