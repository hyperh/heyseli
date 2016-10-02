import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';

import GalleryThumb from './GalleryThumb';
import styles from './Gallery.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Gallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <div>
        <div className={styles.thumbs}>
          {images.map(image => <GalleryThumb src={image.src} />)}
        </div>
        <Lightbox images={images} isOpen={true} />
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
