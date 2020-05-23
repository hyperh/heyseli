import React from 'react';
import imgLogo from './assets-optimized/logo.png';
import imgTxs from './assets-optimized/transactions_google.png';
import imgAddTx from './assets-optimized/add_trans_google.png';
import imgCategory from './assets-optimized/by_category_google.png';
import imgFood from './assets-optimized/by_category_food_google.png';
import imgTimeframe from './assets-optimized/by_category_timeframe_google.png';
import imgTimeAll from './assets-optimized/by_time_all_google.png';
import imgTimeFood from './assets-optimized/by_time_food_google.png';
import imgCurrency from './assets-optimized/currency_google.png';
import imgImport from './assets-optimized/import_google.png';

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
  headerImg: imgLogo,
  images: [
    imgTxs,
    imgAddTx,
    imgCategory,
    imgFood,
    imgTimeframe,
    imgTimeAll,
    imgTimeFood,
    imgCurrency,
    imgImport,
  ],
  year: 2015,
};
