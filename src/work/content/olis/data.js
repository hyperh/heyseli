import React from 'react';
import imgLogo from './logo.png';
import imgLogin from './login.png';
import imgNoAccount from './no-account.png';
import imgCreateAccount from './create-account.png';
import imgForgotPwd from './forgot-password.png';
import imgTextEditor from './text-editor.png';
import imgChat from './chat.png';
import imgTeamDirectory from './team-directory.png';
import imgTeamInfo from './team-info.png';
import imgInvite from './invite-to-team.png';
import imgNew from './new-chat.png';
import imgSearch from './search.png';

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
