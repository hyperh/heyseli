import React, { PropTypes } from 'react';

import styles from './Image.scss';

/* eslint-disable global-require */
const Image = ({ params }) => (
  <div className={styles.wrapper}>
    <img
      src={require(`../../assets/img/${params.link}/${params.image}.png`)}
      alt=""
    />
  </div>
);

Image.propTypes = {
  params: PropTypes.object,
};

export default Image;
