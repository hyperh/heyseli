import React from 'react';
import imgLogo from './logo.png';

export default {
  name: 'Ganache',
  link: 'ganache',
  platforms: ['Electron'],
  desc: (
    <p>
      A local blockchain and blockchain explorer for developers. I worked in a
      team of 3+. I was responsible for fixing bugs and reviewing PRs. I fixed a
      critical memory bug with the application that was causing it to crash if
      left open too long.
    </p>
  ),
  tech: [
    'Javascript',
    'Electron',
    'React',
    'Redux',
    'Redux Thunks',
    'Jest',
    'Web3',
  ],
  imgFolder: 'ganache',
  previewImg: imgLogo,
  headerImg: imgLogo,
  year: 2018.12,
  url: [
    { name: 'Website', value: 'https://www.trufflesuite.com/ganache' },
    { name: 'Github', value: 'https://github.com/trufflesuite/ganache' },
  ],
};
