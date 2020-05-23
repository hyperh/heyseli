import React from 'react';
import imgLogo from './assets-optimized/logo.jpg';
import imgInput from './assets-optimized/input.jpg';
import imgVote from './assets-optimized/vote.jpg';
import imgWinner from './assets-optimized/winner.jpg';

export default {
  name: 'Decide-o-Tron',
  link: 'decide-o-tron',
  platforms: ['Web'],
  desc: (
    <p>
      A tool to help you make hard decisions. I was responsible for all aspects
      of the app, including design and front-end development.
    </p>
  ),
  tech: [
    'Javascript',
    'React',
    'Webpack',
    'MobX',
    'Sketch',
    'Digital Ocean',
    'Git',
    'SCSS',
  ],
  url: 'https://decide-o-tron.herokuapp.com',
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [imgInput, imgVote, imgWinner],
  year: 2016.3,
};
