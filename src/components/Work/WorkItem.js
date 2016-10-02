import React, { PropTypes } from 'react';
import find from 'lodash/fp/find';
import { Link } from 'react-router';

import styles from './WorkItem.scss';
import WorkItemHeader from './WorkItemHeader';
import data from './data';

/* eslint-disable global-require */
const WorkItem = ({ params }) => {
  const findLink = find(item => item.link === params.link);
  const workItem = findLink(data);
  const { name, platforms, url, imgFolder, headerImg, images } = workItem;

  return (
    <div className={styles.wrapper}>
      <WorkItemHeader
        name={name}
        platforms={platforms}
        url={url}
        imgFolder={imgFolder}
        headerImg={headerImg}
      />
      <div><p>{workItem.desc}</p></div>

      <div>
        <h2>Made With</h2>
        <p>{workItem.tech.sort().join(', ')}</p>
      </div>

      <div className={styles.images}>
        {images.map(image => {
          const imgPath = require(`../../assets/img/${imgFolder}/${image}`);
          const imgNoExt = image.replace('.png', '');
          return (
            <div className={styles.imgWrapper} key={image}>
              <Link to={`/work/${workItem.imgFolder}/${imgNoExt}`}>
                <img src={imgPath} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

WorkItem.propTypes = {
  params: PropTypes.object,
};

export default WorkItem;
