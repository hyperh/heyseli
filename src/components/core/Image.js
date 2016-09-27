import React, { PropTypes } from 'react';

/* eslint-disable global-require */
const Image = ({ params }) => (
  <div>
    <img src={require(`../../assets/img/${params.link}/${params.image}.png`)} alt="" />
  </div>
);

Image.propTypes = {
  params: PropTypes.object,
};

export default Image;
