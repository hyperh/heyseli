import React from 'react';
import imgFire from './fire.png';
import imgLogo from './logo.png';
import imgFlyer from './TORCH_flyer_2015.png';

export default {
  name: 'TORCH',
  link: 'torch',
  platforms: ['Design'],
  desc: (
    <p>
      <p>
        TORCH is the annual operations research challenge organized at the
        Mechanical & Industrial Engineering Department at University of Toronto.
        TORCH is a one-day contest where teams of 3 to 4 high school students
        solve 5 to 10 problems related to different application areas of
        operations research. - TORCH website.
      </p>
      <p>I was responsible for the design of the logo and flyers.</p>
    </p>
  ),
  tech: ['Adobe Illustrator'],
  url: 'http://orchallenge.org/',
  previewImg: imgFire,
  headerImg: imgFire,
  images: [imgLogo, imgFlyer],
  year: 2015,
};
