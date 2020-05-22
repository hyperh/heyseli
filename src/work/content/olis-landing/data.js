import React from 'react';
import imgLogo from './logo.png';
import imgAll from './all.png';

export default {
  name: 'Olis Landing Page',
  link: 'olis-landing',
  platforms: ['Web'],
  desc: (
    <p>
      A landing page for Olis. I worked in a team of three and I was responsible
      for design and front-end development.
    </p>
  ),
  tech: ['Javascript', 'React', 'Sketch', 'SCSS'],
  url: [
    { name: 'Demo', value: 'https://hyperh.github.io/olis-website/' },
    { name: 'Github', value: 'https://github.com/hyperh/olis-website' },
  ],
  imgFolder: 'olis-landing',
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [imgAll],
  year: 2016.1,
};
