import React from 'react';
import imgLogo from './logo.png';

export default {
  name: 'Drizzle',
  link: 'drizzle',
  platforms: ['Web', 'React Native'],
  desc: (
    <div>
      <p>
        tools to help dapp development, make interacting with the blockchain
        easier for dapp developers
      </p>
      <p>worked in a team of 4</p>
      <p>
        interacted with the community, reviewed PR, provided feedback, requested
        changes
      </p>
      <p>Added react native support</p>
    </div>
  ),
  tech: [
    'Javascript',
    'React Native',
    'React',
    'Redux',
    'Redux Sagas',
    'RxJS',
    'Web3'
  ],
  imgFolder: 'drizzle',
  previewImg: imgLogo,
  headerImg: imgLogo,
  year: 2018.12,
  url: [
    { name: 'Website', value: 'https://www.trufflesuite.com/drizzle' },
    {
      name: 'Github: Drizzle',
      value: 'https://github.com/trufflesuite/drizzle'
    },
    {
      name: 'Github: Drizzle React Components',
      value: 'https://github.com/trufflesuite/drizzle-react-components'
    },
    {
      name: 'Github: Drizzle Utils',
      value: 'https://github.com/trufflesuite/drizzle-utils'
    }
  ]
};
