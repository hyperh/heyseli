import React from 'react';
import simPaper from '../assets/papers/sim.pdf';
import logoTextyTime from '../assets/img/texty-time/logo.png';

const bfmTechLead = (
  <p>
    Later on, I was involved in the hiring process to bring on more developers
    to help maintain all the app platforms (web and mobile apps). I worked in a
    team of 4 to moving forward. I eventually took on the role of Tech Lead and
    was involved with architecting new codebases and mentoring junior
    developers.
  </p>
);

/* eslint-disable max-len */
export default [
  {
    name: 'Data Center Simulation',
    link: 'data-center',
    platforms: ['Desktop'],
    desc: (
      <div>
        <p>
          A platform to run simulations to aid in the research of resource-aware
          scheduling of computational jobs in a large-scale heterogeneous data
          center. The project was funded by a Google Research Award and the
          Natural Sciences and Engineering Research Council of Canada (NSERC).
        </p>
        <p>
          I worked in a team of 3 to develop the simulation platform. The
          research eventually yielded a{' '}
          <a href={simPaper}>refereed conference article in MISTA</a>.
        </p>
      </div>
    ),
    tech: ['C++', 'SVN'],
    year: 2011
  },
  {
    name: 'Texty Time',
    link: 'texty-time',
    platforms: ['Android'],
    desc: (
      <p>
        An app that helps you understand your textual relationships with others.
        It computes statistics about your texting habits with other people. I
        worked in a team of two and I was responsible for design, front-end
        development, SQLite integration, and app store publication.
      </p>
    ),
    tech: ['Java', 'Android Studio', 'Inkscape', 'Git', 'XML'],
    url:
      'https://play.google.com/store/apps/details?id=com.aheadstudios.talkalytics&hl=en',
    imgFolder: 'texty-time',
    previewImg: logoTextyTime,
    headerImg: 'logo.png',
    images: [
      'main.png',
      'all-time.png',
      'last-2-weeks.png',
      'emoticons.png',
      'compare.png',
      'favorites.png'
    ],
    year: 2013
  },
  {
    name: 'Fridgly',
    link: 'fridgly',
    platforms: ['Android'],
    desc: (
      <p>
        An app that helps you keep track of your food expiration dates. It syncs
        with your Google Calendar to help remind you of when things are going to
        expire and when you should finish eating them. I was responsible for all
        aspects of the app, including design, front-end development, SQLite
        integration, API calls, and app store publication.
      </p>
    ),

    tech: ['Java', 'Android Studio', 'Inkscape', 'Pixelmator', 'XML'],
    url:
      'https://play.google.com/store/apps/details?id=com.aheadstudios.foodcalendar',
    imgFolder: 'fridgly',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: ['main.png', 'meat.png', 'meat-veal.png', 'fridge.png'],
    year: 2015
  },
  {
    name: 'Driller',
    link: 'driller',
    platforms: ['Android'],
    desc: (
      <p>
        An app that helps you keep track of your expenses. It provides detailed
        statistics about your spending habits to help you drill down into the
        areas in which you spend the most money. I was responsible for all
        aspects of the app, including design, front-end development, SQLite
        integration, API calls, and app store publication.
      </p>
    ),
    tech: ['Java', 'Android Studio', 'Inkscape', 'Pixelmator', 'Git', 'XML'],
    url:
      'https://play.google.com/store/apps/details?id=com.aheadstudios.spending3',
    imgFolder: 'driller',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: [
      'transactions_google.png',
      'add_trans_google.png',
      'by_category_google.png',
      'by_category_food_google.png',
      'by_category_timeframe_google.png',
      'by_time_all_google.png',
      'by_time_food_google.png',
      'currency_google.png',
      'import_google.png'
    ],
    year: 2015
  },
  {
    name: 'TORCH',
    link: 'torch',
    platforms: ['Design'],
    desc: (
      <p>
        <p>
          "TORCH is the annual operations research challenge organized at the
          Mechanical & Industrial Engineering Department at University of
          Toronto. TORCH is a one-day contest where teams of 3 to 4 high school
          students solve 5 to 10 problems related to different application areas
          of operations research." - TORCH website.
        </p>
        <p>I was responsible for the design of the logo and flyers.</p>
      </p>
    ),

    tech: ['Adobe Illustrator'],
    url: 'http://orchallenge.org/',
    imgFolder: 'torch',
    // previewImg: 'fire.png',
    headerImg: 'fire.png',
    images: ['logo.png', 'TORCH_flyer_2015.png'],
    year: 2015
  },
  {
    name: 'MIE Banner Contest',
    link: 'mie-banner',
    platforms: ['Design'],
    desc: (
      <p>
        The faculty of Mechanical and Industrial Engineering (MIE), wanted to
        replace a really old banner on the outside of a building, so they held a
        contest. This was my winning entry.
      </p>
    ),
    tech: ['Adobe Illustrator'],
    imgFolder: 'mie-banner',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: ['MIE-Banner-FINAL.png'],
    year: 2015
  },
  {
    name: 'Olis',
    link: 'olis',
    platforms: ['Web', 'PC', 'OSX', 'Android', 'iOS'],
    desc: (
      <p>
        A business communication tool designed to help you keep the most
        important information visible. I worked in a team of three and I was
        responsible for design, front-end development and back-end development.
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
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
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
  },
  {
    name: 'Olis Landing Page',
    link: 'olis-landing',
    platforms: ['Web'],
    desc: (
      <p>
        A landing page for Olis. I worked in a team of three and I was
        responsible for design and front-end development.
      </p>
    ),
    tech: ['Javascript', 'React', 'Sketch', 'SCSS'],
    url: [
      { name: 'Demo', value: 'https://hyperh.github.io/olis-website/' },
      { name: 'Github', value: 'https://github.com/hyperh/olis-website' }
    ],
    imgFolder: 'olis-landing',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: ['all.png'],
    year: 2016.1
  },
  {
    name: 'ReactForge',
    link: 'react-forge',
    platforms: ['Web'],
    desc: (
      <p>
        A landing page for ReactForge, a React-based web development agency. I
        worked in a team of three and I was responsible for design and front-end
        development.
      </p>
    ),
    tech: ['Javascript', 'React', 'Webpack', 'Sketch', 'SCSS'],
    url: [
      {
        name: 'Demo',
        value: 'https://hyperh.github.io/react-forge-landing/'
      },
      {
        name: 'Github',
        value: 'https://github.com/hyperh/react-forge-landing'
      }
    ],
    imgFolder: 'react-forge',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: ['all.png'],
    year: 2016.2
  },
  {
    name: 'Decide-o-Tron',
    link: 'decide-o-tron',
    platforms: ['Web'],
    desc: (
      <p>
        A tool to help you make hard decisions. I was responsible for all
        aspects of the app, including design and front-end development.
      </p>
    ),
    tech: [
      'Javascript',
      'React',
      'Webpack',
      'MobX',
      'Sketch',
      'Digital Ocean',
      'Git',
      'SCSS'
    ],
    url: 'https://decide-o-tron.herokuapp.com',
    imgFolder: 'decide-o-tron',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: ['input.png', 'vote.png', 'winner.png'],
    year: 2016.3
  },
  {
    name: 'Brain.fm (Web)',
    link: 'brainfm-web',
    platforms: ['Web'],
    desc: (
      <div>
        <p>
          A web app that streams music. I was responsible for the rewriting of
          the entre website. I replaced old JQuery and Handlebars code with a
          modern ES6, React frontend architecture. I also rewrote the
          server-side Express code, replicating all the functionality of the
          original.
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
    // previewImg: 'logo.png',
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
  },
  {
    name: 'Brain.fm (Mobile)',
    link: 'brainfm-mobile',
    platforms: ['Android', 'iOS'],
    desc: (
      <div>
        <p>
          A mobile app that streams music. It used React Native to support both
          the Android and iOS platforms. I worked in a team of three to
          stabilize the mobile apps after a large number of bugs were being
          reported by users.
        </p>

        <p>
          After the apps were successfully stabilized I worked to implement new
          features as requested by product.
        </p>

        {bfmTechLead}

        <p>
          Later, I was responsible for rearchitecting the mobile apps as the
          orginal mobile app codebase had become too bloated and fragmented to
          work with to fulfill the requirements from product in a reasonable
          timeframe.
        </p>
      </div>
    ),
    tech: [
      'Javascript',
      'React',
      'React Native',
      'Travis',
      'Jenkins',
      'Git',
      'Java'
    ],
    url: [
      {
        name: 'Android',
        value:
          'https://play.google.com/store/apps/details?id=com.brainfm.app&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
      },
      {
        name: 'iOS',
        value:
          'https://itunes.apple.com/vn/app/brain.fm-music-for-focus-meditation/id1110684238?mt=8'
      }
    ],
    imgFolder: 'brainfm-mobile',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: [
      'launch.png',
      'focus.png',
      'signup.png',
      'home.png',
      'explore.png',
      'player.png',
      'settings.png',
      'drawer.png'
    ],
    year: 2017
  },
  {
    name: 'bZx',
    link: 'bzx',
    platforms: ['Web'],
    desc: (
      <div>
        <p>
          A decentralized margin trading cryptocurrency exchange for ERC20
          tokens.
        </p>

        <p>
          I was responsible for writing the Javascript library for dApp
          developers to integrate bZx into their applications. I worked in a
          team of three to successfully integrate the library with the bZx
          portal and bzX smart contracts and deploy onto the Ropsten and Kovan
          testnets.
        </p>
      </div>
    ),
    tech: [
      'Javascript',
      'React',
      'Solidity',
      'Jest',
      'Git',
      'web3.js',
      'Metamask'
    ],
    url: [
      { name: 'Website', value: 'https://bzx.network/' },
      { name: 'Github', value: 'https://github.com/b0xNetwork/b0x.js' }
    ],
    imgFolder: 'bzx',
    // previewImg: 'logo.png',
    headerImg: 'logo.png',
    images: ['gen_order_screen.png', 'balances_screen.png'],
    year: 2018
  }
];
