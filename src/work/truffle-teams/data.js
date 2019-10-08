import React from 'react';
import imgLogo from './logo.svg';

export default {
  name: 'Truffle Teams',
  link: 'truffle-teams',
  platforms: ['Web'],
  desc: (
    <div>
      <p>
        A web-based service that spans the building, deployment, and monitoring
        of smart contracts and dapps for software development teams. I worked in
        a team of 6.
      </p>
      <p>
        I led the development of the front-end client. In order to streamline
        development, I setup Storybook, unit tests, and snapshot-based
        integration tests. I also interacted with the product manager and
        designer to gather requirements and to clarify feature requests for
        development purposes.
      </p>
    </div>
  ),
  tech: [
    'Typescript',
    'React',
    'React Hooks',
    'Redux',
    'Redux Thunks',
    'Apollo',
    'GraphQL',
    'Express',
    'Storybook',
    'Web3',
    'Infura'
  ],
  imgFolder: 'truffle-teams',
  previewImg: imgLogo,
  headerImg: imgLogo,
  year: 2019.3,
  url: 'https://www.trufflesuite.com/teams'
};
