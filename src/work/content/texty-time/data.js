import React from 'react';
import imgLogo from './assets-optimized/logo.jpg';
import imgMain from './assets-optimized/main.jpg';
import imgAllTime from './assets-optimized/all-time.jpg';
import imgLast2Weeks from './assets-optimized/last-2-weeks.jpg';
import imgEmoticons from './assets-optimized/emoticons.jpg';
import imgCompare from './assets-optimized/compare.jpg';
import imgFavorites from './assets-optimized/favorites.jpg';

export default {
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
  previewImg: imgLogo,
  headerImg: imgLogo,
  images: [
    imgMain,
    imgAllTime,
    imgLast2Weeks,
    imgEmoticons,
    imgCompare,
    imgFavorites,
  ],
  year: 2013,
};
