import PropTypes from 'prop-types';
import React from 'react';
import styles from './WorkItemHeader.scss';
import ExternalLink from '../core/ExternalLink';

const getHeaderImg = (imgFolder, headerImg) =>
  headerImg ? (
    <div className={styles.imgWrapper}>
      <img src={`/${headerImg}`} alt="header" />
    </div>
  ) : null;

const WorkItemHeader = ({ name, platforms, url, imgFolder, headerImg }) => (
  <div className={styles.wrapper}>
    {getHeaderImg(imgFolder, headerImg)}
    <div>
      <h1>{name}</h1>
      <p className={styles.platforms}>{platforms.join(', ')}</p>
      {typeof url === 'string' && <ExternalLink to={url}>Link</ExternalLink>}
      {Array.isArray(url) &&
        url.map(u => (
          <p key={u.name}>
            <ExternalLink to={u.value}>{u.name}</ExternalLink>
          </p>
        ))}
    </div>
  </div>
);

WorkItemHeader.propTypes = {
  name: PropTypes.string,
  platforms: PropTypes.array,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object)
  ]),
  imgFolder: PropTypes.string,
  headerImg: PropTypes.string
};

export default WorkItemHeader;
