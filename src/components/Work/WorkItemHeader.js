import React, { PropTypes } from 'react';

import styles from './WorkItemHeader.scss';

/* eslint-disable global-require */
const getHeaderImg = (imgFolder, headerImg) => {
  const headerImgPath = headerImg ?
    require(`../../assets/img/${imgFolder}/${headerImg}`) : null;
  return headerImg ?
    <div className={styles.header}><img src={headerImgPath} alt="header" /></div> : null;
};

const WorkItemHeader = ({ name, platforms, url, imgFolder, headerImg }) => (
  <div className={styles.wrapper}>
    {getHeaderImg(imgFolder, headerImg)}
    <div className={styles.text}>
      <h1>{name}</h1>
      <p className={styles.platforms}>{platforms.join(', ')}</p>
      <a href={url}>Link</a>
    </div>
  </div>
);

WorkItemHeader.propTypes = {
  name: PropTypes.string,
  platforms: PropTypes.array,
  url: PropTypes.string,
  imgFolder: PropTypes.string,
  headerImg: PropTypes.string,
};

export default WorkItemHeader;
