import React from 'react';
import logoTextyTime from './logo.png';

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
};
