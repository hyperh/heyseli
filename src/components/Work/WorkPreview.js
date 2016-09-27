import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './WorkPreview.scss';

const side = '150';
const WorkPreview = ({ name, platform, link, previewImg }) => (
  <div className={styles.wrapper}>
    <Link to={`/work/${link}`}>
      <img
        width={side}
        height={side}
        src={previewImg ? require(`../../assets/img/${previewImg}`) : null} // eslint-disable-line global-require, max-len
        alt={name}
      />
    </Link>
    <div>{name}</div>
    <div>{platform}</div>
  </div>
);

WorkPreview.propTypes = {
  name: PropTypes.string.isRequired,
  platform: PropTypes.array,
  link: PropTypes.string,
  previewImg: PropTypes.string,
};

export default WorkPreview;
