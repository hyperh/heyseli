import React, { PropTypes } from 'react';
import find from 'lodash/fp/find';

import styles from './WorkItem.scss';
import data from './data';

const WorkItem = ({ params }) => {
  const findLink = find(item => item.link === params.link);
  const workItem = findLink(data);
   // eslint-disable-next-line global-require
  const images = workItem.images.map(image => require(`../../assets/img/${image}`));

  return (
    <div className={styles.wrapper}>
      <div>
        <img src="" alt="header" />
      </div>
      <div>
        <h1>{workItem.name}</h1>
        <p>{workItem.platforms.join(', ')}</p>
        <a href={workItem.url}>{workItem.url}</a>
      </div>

      <div>{workItem.desc}</div>

      <div>
        <h2>Ingredients</h2>
        <p>{workItem.tech.join(', ')}</p>
      </div>

      <div className={styles.images}>
        {images.map(image =>
          <div className={styles.imgWrapper}>
            <img key={image} src={image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

WorkItem.propTypes = {
  params: PropTypes.object,
};

export default WorkItem;
