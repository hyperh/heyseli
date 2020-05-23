import React from 'react';
import imgLogo from './assets-optimized/logo.png';
import imgLogin from './assets-optimized/login.png';
import imgNoAccount from './assets-optimized/no-account.png';
import imgCreateAccount from './assets-optimized/create-account.png';
import imgForgotPwd from './assets-optimized/forgot-password.png';
import imgTextEditor from './assets-optimized/text-editor.png';
import imgChat from './assets-optimized/chat.png';
import imgTeamDirectory from './assets-optimized/team-directory.png';
import imgTeamInfo from './assets-optimized/team-info.png';
import imgInvite from './assets-optimized/invite-to-team.png';
import imgNew from './assets-optimized/new-chat.png';
import imgSearch from './assets-optimized/search.png';

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
    'Jade/Pug',
  ],
  url: [{ name: 'Github', value: 'https://github.com/hyperh/olis' }],
  imgFolder: 'olis',
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [
    imgLogin,
    imgNoAccount,
    imgCreateAccount,
    imgForgotPwd,
    imgTextEditor,
    imgChat,
    imgTeamDirectory,
    imgTeamInfo,
    imgInvite,
    imgNew,
    imgSearch,
  ],
  year: 2016.0,
};
