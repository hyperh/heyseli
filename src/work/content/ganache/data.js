import React from 'react';
import imgLogo from './assets-optimized/logo.png';
import imgGanacheMain from './assets-optimized/ganache-main.png';
import imgGanacheAccounts from './assets-optimized/ganache-accounts.png';
import imgGanacheBlocks from './assets-optimized/ganache-blocks.png';
import imgGanacheContracts from './assets-optimized/ganache-contracts.png';
import imgGanacheLogs from './assets-optimized/ganache-logs.png';
import imgGanacheTxs from './assets-optimized/ganache-transactions.png';

export default {
  name: 'Ganache',
  link: 'ganache',
  platforms: ['Electron'],
  desc: (
    <div>
      <p>
        A local blockchain and blockchain explorer for developers. I worked in a
        team of 3+. I was responsible for implementing features, fixing bugs and
        reviewing PRs.
      </p>
      <p>
        Notable accomplishments include:
        <ui>
          <li>
            Fixing a critical memory bug with the application that was causing
            it to crash if left open too long.
          </li>
          <li>
            Reducing the Webpack bundle size from 29M to 3.6M, which was a 8x
            improvement in bundle size.
          </li>
        </ui>
      </p>
    </div>
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
  images: [
    imgGanacheMain,
    imgGanacheAccounts,
    imgGanacheBlocks,
    imgGanacheContracts,
    imgGanacheLogs,
    imgGanacheTxs,
  ],
};
