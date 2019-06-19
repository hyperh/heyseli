import React from 'react';
import imgLogo from './logo.png';

export default {
  name: 'Ganache',
  link: 'ganache',
  platforms: ['Electron'],
  desc: (
    <p>
      a personal development blockchain and blockchain explorer, worked in a
      team of 3, fixed bugs, reviewed PRs
    </p>
  ),
  tech: [
    'Javascript',
    'Electron',
    'React',
    'Redux',
    'Redux Thunks',
    'Jest',
    'Web3'
  ],
  imgFolder: 'ganache',
  previewImg: imgLogo,
  headerImg: imgLogo,
  year: 2018.12,
  url: [
    { name: 'Website', value: 'https://www.trufflesuite.com/ganache' },
    { name: 'Github', value: 'https://github.com/trufflesuite/ganache' }
  ]
};
