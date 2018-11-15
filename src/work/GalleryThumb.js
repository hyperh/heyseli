import React, { Component, PropTypes } from 'react';

import styles from './GalleryThumb.scss';

// eslint-disable-next-line react/prefer-stateless-function
class GalleryThumb extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick, index } = this.props;
    onClick(index);
  }

  render() {
    const { src } = this.props;
    return (
      <div className={styles.wrapper} key={src}>
        <img src={src} alt="" onClick={this.onClick} />
      </div>
    );
  }
}

GalleryThumb.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number,
  onClick: PropTypes.func
};

export default GalleryThumb;
