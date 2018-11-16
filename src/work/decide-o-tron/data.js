import React from 'react';
import imgLogo from './logo.png';
import imgInput from './input.png';
import imgVote from './vote.png';
import imgWinner from './winner.png';

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
    'SCSS'
  ],
  url: 'https://decide-o-tron.herokuapp.com',
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [imgInput, imgVote, imgWinner],
  year: 2016.3
};
