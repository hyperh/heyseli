import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';
import styled from 'styled-components';
import GalleryThumb from './GalleryThumb';

const Thumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.onClickGalleryThumb = this.onClickGalleryThumb.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickThumbnail = this.onClickThumbnail.bind(this);
    this.onClickImage = this.onClickImage.bind(this);
    this.onClose = this.onClose.bind(this);
    this.state = {
      isOpen: false,
      currentImage: 0
    };
  }

  onClickGalleryThumb(index) {
    this.setState({
      isOpen: true,
      currentImage: index
    });
  }

  onClickNext() {
    const { images } = this.props;
    const { currentImage } = this.state;
    this.setState({
      currentImage: currentImage < images.length - 1 ? currentImage + 1 : 0
    });
  }

  onClickPrev() {
    const { images } = this.props;
    const { currentImage } = this.state;
    this.setState({
      currentImage: currentImage > 0 ? currentImage - 1 : images.length - 1
    });
  }

  onClickThumbnail(index) {
    this.setState({ currentImage: index });
  }

  onClickImage() {
    this.onClickNext();
  }

  onClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const { images } = this.props;
    const { isOpen, currentImage } = this.state;
    return (
      <div>
        <Thumbs>
          {images.map((image, index) => (
            <GalleryThumb
              key={image.src}
              src={image.src}
              index={index}
              onClick={this.onClickGalleryThumb}
            />
          ))}
        </Thumbs>
        <Lightbox
          images={images}
          isOpen={isOpen}
          currentImage={currentImage}
          onClickNext={this.onClickNext}
          onClickPrev={this.onClickPrev}
          onClickImage={this.onClickImage}
          onClose={this.onClose}
          onClickThumbnail={this.onClickThumbnail}
          showThumbnails
        />
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default Gallery;
