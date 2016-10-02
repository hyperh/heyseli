import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';

import GalleryThumb from './GalleryThumb';
import styles from './Gallery.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.onClickGalleryThumb = this.onClickGalleryThumb.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClose = this.onClose.bind(this);
    this.state = {
      isOpen: false,
      currentImage: 0,
    };
  }

  onClickGalleryThumb(index) {
    this.setState({
      isOpen: true,
      currentImage: index,
    });
  }

  onClickNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  onClickPrev() {
    this.setState({
      currentImage: this.state.currentImage - 1,
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
            <GalleryThumb
              key={image.src}
              src={image.src}
              index={index}
              onClick={this.onClickGalleryThumb}
            />
          ))}
        </div>
        <Lightbox
          images={images}
          isOpen={isOpen}
          currentImage={currentImage}
          onClickNext={this.onClickNext}
          onClickPrev={this.onClickPrev}
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
