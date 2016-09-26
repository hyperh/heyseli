import React, { PropTypes } from 'react';
import find from 'lodash/fp/find';

import styles from './WorkItem.scss';
import data from './data';

const WorkItem = ({ params }) => {
  const findLink = find(item => item.link === params.link);
  const workItem = findLink(data);

  return (
    <div className={styles.wrapper}>
      <div>{workItem.name}</div>
      <div>{workItem.platforms}</div>
      <div>{workItem.tech}</div>
      <div>{workItem.url}</div>
      <div>{workItem.desc}</div>
    </div>
  );
};

WorkItem.propTypes = {
  params: PropTypes.object,
};

export default WorkItem;
