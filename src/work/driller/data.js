import React from 'react';
import imgLogo from './logo.png';

export default {
  name: 'Driller',
  link: 'driller',
  platforms: ['Android'],
  desc: (
    <p>
      An app that helps you keep track of your expenses. It provides detailed
      statistics about your spending habits to help you drill down into the
      areas in which you spend the most money. I was responsible for all aspects
      of the app, including design, front-end development, SQLite integration,
      API calls, and app store publication.
    </p>
  ),
  tech: ['Java', 'Android Studio', 'Inkscape', 'Pixelmator', 'Git', 'XML'],
  url:
    'https://play.google.com/store/apps/details?id=com.aheadstudios.spending3',
  previewImg: imgLogo,
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
};
