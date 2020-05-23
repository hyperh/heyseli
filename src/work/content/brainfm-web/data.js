import React from 'react';
import imgLogo from './assets-optimized/logo.jpg';
import imgLanding from './assets-optimized/landing-page.jpg';
import imgLandingResponsive from './assets-optimized/landing-page-responsive.jpg';
import imgAbout from './assets-optimized/about.jpg';
import imgScience from './assets-optimized/science.jpg';
import imgPress from './assets-optimized/press.jpg';
import imgPricing from './assets-optimized/pricing.jpg';
import imgFaq from './assets-optimized/faq.jpg';
import imgApp from './assets-optimized/app.jpg';
import imgExplore from './assets-optimized/explore.jpg';
import imgLearn from './assets-optimized/learn.jpg';

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

      <p>
        The website grew to more than 70,000 active users and 800,000 pageviews
        per month.
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
    'Git',
  ],
  url: 'https://brain.fm',
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [
    imgLanding,
    imgLandingResponsive,
    imgAbout,
    imgScience,
    imgPress,
    imgPricing,
    imgFaq,
    imgApp,
    imgExplore,
    imgLearn,
  ],
  year: 2017,
};
