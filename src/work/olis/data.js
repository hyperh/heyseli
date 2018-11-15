import React from 'react';
import imgLogo from './logo.png';

export default {
  name: 'Olis',
  link: 'olis',
  platforms: ['Web', 'PC', 'OSX', 'Android', 'iOS'],
  desc: (
    <p>
      A business communication tool designed to help you keep the most important
      information visible. I worked in a team of three and I was responsible for
      design, front-end development and back-end development.
    </p>
  ),
  tech: [
    'Javascript',
    'React',
    'Meteor',
    'MongoDB',
    'Electron',
    'React Native',
    'Digital Ocean',
    'Sketch',
    'Git',
    'Jade/Pug'
  ],
  url: [{ name: 'Github', value: 'https://github.com/hyperh/olis' }],
  imgFolder: 'olis',
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [
    'login.png',
    'no-account.png',
    'create-account.png',
    'forgot-password.png',
    'text-editor.png',
    'chat.png',
    'team-directory.png',
    'team-info.png',
    'invite-to-team.png',
    'new-chat.png',
    'search.png'
  ],
  year: 2016.0
};
