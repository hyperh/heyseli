import React from 'react';
import styles from './styles.scss';
import WorkPreview from './WorkPreview';
import data from './data';

const yearDesc = (a, b) => b.year - a.year;
const sorted = data.sort(yearDesc);

const Work = () => (
  <div className={styles.wrapper}>
    {sorted.map(item => (
      <WorkPreview
        key={item.name}
        name={item.name}
        platform={item.platform}
        link={item.link}
        previewImg={item.previewImg}
      />
    ))}
  </div>
);

export default Work;
