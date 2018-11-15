import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import styles from './WorkPreview.scss';

const WorkPreview = ({ name, platform, link, previewImg }) => (
  <div className={styles.wrapper}>
    <Link to={`/work/${link}`}>
      <div
        className={classNames(styles.imgWrapper, !previewImg && styles.noImg)}
      >
        {previewImg && (
          <img
            src={// eslint-disable-next-line global-require, max-len
            require(`../assets/img/${link}/${previewImg}`)}
            alt={name}
          />
        )}
      </div>
    </Link>
    <div className={styles.name}>{name}</div>
    <div>{platform}</div>
  </div>
);

WorkPreview.propTypes = {
  name: PropTypes.string.isRequired,
  platform: PropTypes.array,
  link: PropTypes.string,
  previewImg: PropTypes.string
};

export default WorkPreview;
