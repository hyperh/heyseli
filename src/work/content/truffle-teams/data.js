import React from 'react';
import imgLogo from './logo.svg';
import imgTeamsBuild from './assets-optimized/teams-build.png';
import imgTeamsBuilds from './assets-optimized/teams-builds.png';
import imgTeamsDeployments from './assets-optimized/teams-deployments.png';
import imgTeamsLogin from './assets-optimized/teams-login.png';
import imgTeamsMain from './assets-optimized/teams-main.png';
import imgTeamsSandboxes from './assets-optimized/teams-sandboxes.png';

export default {
  name: 'Truffle Teams',
  link: 'truffle-teams',
  platforms: ['Web'],
  desc: (
    <div>
      <p>
        A web-based service that spans the building, deployment, and monitoring
        of smart contracts and dapps for software development teams. I worked in
        a team of 6+.
      </p>
      <p>
        I led the development of the front-end client and instituted many
        improvements and best practices. In order to streamline development, I
        setup Storybook, unit tests, and snapshot-based integration tests. I
        also interacted with the product manager and designer to gather
        requirements and to clarify feature requests for development purposes. I
        setup automated deployments of Storybook to improve cross-team and
        communications with management about the state of the product.
      </p>
      <p>
        I also wrote typeDefs and resolvers for Apollo queries, mutations, and
        subscriptions. I setup mock servers to streamline the local development
        experience for devs.
      </p>
    </div>
  ),
  tech: [
    'Metamask',
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
    'Infura',
    'Github Actions',
    'Docker',
    'RabbitMQ',
    'Postgresql',
  ],
  imgFolder: 'truffle-teams',
  previewImg: imgLogo,
  headerImg: imgLogo,
  year: 2019.3,
  url: 'https://www.trufflesuite.com/teams',
  images: [
    imgTeamsLogin,
    imgTeamsMain,
    imgTeamsBuilds,
    imgTeamsBuild,
    imgTeamsDeployments,
    imgTeamsSandboxes,
  ],
};
