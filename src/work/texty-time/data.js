import React from 'react';
import imgLogo from './logo.png';
import imgMain from './main.png';
import imgAllTime from './all-time.png';
import imgLast2Weeks from './last-2-weeks.png';
import imgEmoticons from './emoticons.png';
import imgCompare from './compare.png';
import imgFavorites from './favorites.png';

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
    imgFavorites
  ],
  year: 2013
};
