import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './WorkPreview.scss';

const WorkPreview = ({ name, platform, link, previewImg }) => (
  <div className={styles.wrapper}>
    <Link to={`/work/${link}`}>
      <div className={styles.imgWrapper}>
        <img
          src={previewImg ? require(`../../assets/img/${link}/${previewImg}`) : null} // eslint-disable-line global-require, max-len
          alt={name}
        />
      </div>
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
