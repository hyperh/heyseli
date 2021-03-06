import React from 'react';
import imgLogo from './assets-optimized/logo.png';
import imgDrizzle from './assets-optimized/drizzle.png';

export default {
  name: 'Drizzle',
  link: 'drizzle',
  platforms: ['Web', 'React Native'],
  desc: (
    <div>
      <p>
        Tools to help front-end dapp development and to make interacting with
        the blockchain easier for dapp developers.
      </p>
      <p>
        I worked in a team of 4. I interacted with our open-source community,
        reviewed PRs, implemented new features, and fixed bugs. I spearheaded
        efforts to improve and modernize Drizzle React Components with latest
        React best practices. I also contributed heavily to the RxJS-based
        Drizzle Utils.
      </p>
    </div>
  ),
  tech: [
    'Javascript',
    'React Native',
    'React',
    'Redux',
    'Redux Sagas',
    'RxJS',
    'Web3',
  ],
  imgFolder: 'drizzle',
  previewImg: imgLogo,
  headerImg: imgLogo,
  year: 2018.12,
  url: [
    { name: 'Website', value: 'https://www.trufflesuite.com/drizzle' },
    {
      name: 'Github: Drizzle',
      value: 'https://github.com/trufflesuite/drizzle',
    },
    {
      name: 'Github: Drizzle React Components',
      value: 'https://github.com/trufflesuite/drizzle-react-components',
    },
    {
      name: 'Github: Drizzle Utils',
      value: 'https://github.com/trufflesuite/drizzle-utils',
    },
  ],
  images: [imgDrizzle],
};
