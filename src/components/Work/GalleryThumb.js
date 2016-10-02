import React, { Component, PropTypes } from 'react';

import styles from './GalleryThumb.scss';

// eslint-disable-next-line react/prefer-stateless-function
class GalleryThumb extends Component {
  render() {
    const { src } = this.props;
    return (
      <div className={styles.wrapper} key={src}>
        <img src={src} alt="" />
      </div>
    );
  }
}

GalleryThumb.propTypes = {
  src: PropTypes.string.isRequired,
};

export default GalleryThumb;
