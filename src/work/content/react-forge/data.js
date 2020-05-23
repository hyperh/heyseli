import React from 'react';
import imgLogo from './assets-optimized/logo.jpg';
import imgAll from './assets-optimized/all.jpg';

export default {
  name: 'ReactForge',
  link: 'react-forge',
  platforms: ['Web'],
  desc: (
    <p>
      A landing page for ReactForge, a React-based web development agency. I
      worked in a team of three and I was responsible for design and front-end
      development.
    </p>
  ),
  tech: ['Javascript', 'React', 'Webpack', 'Sketch', 'SCSS'],
  url: [
    {
      name: 'Demo',
      value: 'https://hyperh.github.io/react-forge-landing/',
    },
    {
      name: 'Github',
      value: 'https://github.com/hyperh/react-forge-landing',
    },
  ],
  imgFolder: 'react-forge',
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [imgAll],
  year: 2016.2,
};
