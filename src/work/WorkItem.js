import React, { PropTypes } from 'react';
import find from 'lodash/fp/find';

import styles from './WorkItem.scss';
import WorkItemHeader from './WorkItemHeader';
import Gallery from './Gallery';
import data from './data';

/* eslint-disable global-require */
const WorkItem = ({ params }) => {
  const findLink = find(item => item.link === params.link);
  const workItem = findLink(data);
  const { name, platforms, url, imgFolder, headerImg, images = [] } = workItem;
  const lightboxImgs = images.map(image => ({
    src: require(`../assets/img/${imgFolder}/${image}`)
  }));

  return (
    <div className={styles.wrapper}>
      <WorkItemHeader
        name={name}
        platforms={platforms}
        url={url}
        imgFolder={imgFolder}
        headerImg={headerImg}
      />
      <div className={styles.desc}>{workItem.desc}</div>

      <div>
        <h2>Made With</h2>
        <p className={styles.made}>{workItem.tech.sort().join(', ')}</p>
      </div>

      <Gallery images={lightboxImgs} />
    </div>
  );
};

WorkItem.propTypes = {
  params: PropTypes.object
};

export default WorkItem;
