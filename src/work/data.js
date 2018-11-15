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

export const bfmTechLead = (
  <p>
    Later on, I was involved in the hiring process to bring on more developers
    to help maintain all the app platforms (web and mobile apps). I worked in a
    team of 4 to moving forward. I eventually took on the role of Tech Lead and
    was involved with architecting new codebases and mentoring junior
    developers.
  </p>
);

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
  {
    name: 'Brain.fm (Mobile)',
    link: 'brainfm-mobile',
    platforms: ['Android', 'iOS'],
    desc: (
      <div>
        <p>
          A mobile app that streams music. It used React Native to support both
          the Android and iOS platforms. I worked in a team of three to
          stabilize the mobile apps after a large number of bugs were being
          reported by users.
        </p>

        <p>
          After the apps were successfully stabilized I worked to implement new
          features as requested by product.
        </p>

        {bfmTechLead}

        <p>
          Later, I was responsible for rearchitecting the mobile apps as the
          orginal mobile app codebase had become too bloated and fragmented to
          work with to fulfill the requirements from product in a reasonable
          timeframe.
        </p>
      </div>
    ),
    tech: [
      'Javascript',
      'React',
      'React Native',
      'Travis',
      'Jenkins',
      'Git',
      'Java'
    ],
    url: [
      {
        name: 'Android',
        value:
          'https://play.google.com/store/apps/details?id=com.brainfm.app&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
      },
      {
        name: 'iOS',
        value:
          'https://itunes.apple.com/vn/app/brain.fm-music-for-focus-meditation/id1110684238?mt=8'
      }
    ],
    imgFolder: 'brainfm-mobile',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: [
      'launch.png',
      'focus.png',
      'signup.png',
      'home.png',
      'explore.png',
      'player.png',
      'settings.png',
      'drawer.png'
    ],
    year: 2017
  },
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
