import React from 'react';
import simPaper from '../assets/papers/sim.pdf';
import textyTime from './texty-time/data';
import fridgly from './fridgly/data';
import driller from './driller/data';
import torch from './torch/data';
import mieBanner from './mie-banner/data';
import olis from './olis/data';
import olisLanding from './olis-landing/data';
import reactForge from './react-forge/data';
import decideotron from './decide-o-tron/data';
import bfmWeb from './brainfm-web/data';
import bfmMobile from './brainfm-mobile/data';

/* eslint-disable max-len */
export default [
  {
    name: 'Data Center Simulation',
    link: 'data-center',
    platforms: ['Desktop'],
    desc: (
      <div>
        <p>
          A platform to run simulations to aid in the research of resource-aware
          scheduling of computational jobs in a large-scale heterogeneous data
          center. The project was funded by a Google Research Award and the
          Natural Sciences and Engineering Research Council of Canada (NSERC).
        </p>
        <p>
          I worked in a team of 3 to develop the simulation platform. The
          research eventually yielded a{' '}
          <a href={simPaper}>refereed conference article in MISTA</a>.
        </p>
      </div>
    ),
    tech: ['C++', 'SVN'],
    year: 2011
  },
  textyTime,
  fridgly,
  driller,
  torch,
  mieBanner,
  olis,
  olisLanding,
  reactForge,
  decideotron,
  bfmWeb,
  bfmMobile,
  {
    name: 'bZx',
    link: 'bzx',
    platforms: ['Web'],
    desc: (
      <div>
        <p>
          A decentralized margin trading cryptocurrency exchange for ERC20
          tokens.
        </p>

        <p>
          I was responsible for writing the Javascript library for dApp
          developers to integrate bZx into their applications. I worked in a
          team of three to successfully integrate the library with the bZx
          portal and bzX smart contracts and deploy onto the Ropsten and Kovan
          testnets.
        </p>
      </div>
    ),
    tech: [
      'Javascript',
      'React',
      'Solidity',
      'Jest',
      'Git',
      'web3.js',
      'Metamask'
    ],
    url: [
      { name: 'Website', value: 'https://bzx.network/' },
      { name: 'Github', value: 'https://github.com/b0xNetwork/b0x.js' }
    ],
    imgFolder: 'bzx',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: ['gen_order_screen.png', 'balances_screen.png'],
    year: 2018
  }
];
