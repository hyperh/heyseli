import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';

import GalleryThumb from './GalleryThumb';
import styles from './Gallery.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.onClickThumb = this.onClickThumb.bind(this);
    this.onClose = this.onClose.bind(this);
    this.state = {
      isOpen: false,
      currentImage: 0,
    };
  }

  onClickThumb(index) {
    this.setState({
      isOpen: true,
      currentImage: index,
    });
  }

  onClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { images } = this.props;
    const { isOpen, currentImage } = this.state;
    return (
      <div>
        <div className={styles.thumbs}>
          {images.map((image, index) => (
            <GalleryThumb src={image.src} index={index} onClick={this.onClickThumb} />
          ))}
        </div>
        <Lightbox
          images={images}
          isOpen={isOpen}
          currentImage={currentImage}
          onClose={this.onClose}
          showThumbnails
        />
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
