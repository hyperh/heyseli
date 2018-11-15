import React from 'react';
import imgLogo from './logo.png';

export const bfmTechLead = (
  <p>
    Later on, I was involved in the hiring process to bring on more developers
    to help maintain all the app platforms (web and mobile apps). I worked in a
    team of 4 to moving forward. I eventually took on the role of Tech Lead and
    was involved with architecting new codebases and mentoring junior
    developers.
  </p>
);

export default {
  name: 'Brain.fm (Web)',
  link: 'brainfm-web',
  platforms: ['Web'],
  desc: (
    <div>
      <p>
        A web app that streams music. I was responsible for the rewriting of the
        entre website. I replaced old JQuery and Handlebars code with a modern
        ES6, React frontend architecture. I also rewrote the server-side Express
        code, replicating all the functionality of the original.
      </p>

      <p>
        The new codebase was significantly more maintainable and easier to add
        functionality to, allowing the company to iterate faster and deliver
        more features to users in less time. Working with a team of one other
        developer and one infrastructure engineer, the new website was
        successfully relaunched and deployed to over 50,000 active users. It
        streamed over 80TB of music a month.
      </p>
      {bfmTechLead}
    </div>
  ),
  tech: [
    'Javascript',
    'React',
    'Redux',
    'Redux Sagas',
    'CSS Next',
    'Express',
    'MySQL',
    'Webpack',
    'Travis',
    'Jenkins',
    'Git'
  ],
  url: 'https://brain.fm',
  imgFolder: 'brainfm-web',
  previewImg: imgLogo,
  headerImg: 'logo.png',
  images: [
    'landing-page.png',
    'landing-page-responsive.png',
    'about.png',
    'science.png',
    'press.png',
    'pricing.png',
    'faq.png',
    'app.png',
    'explore.png',
    'learn.png'
  ],
  year: 2017
};
