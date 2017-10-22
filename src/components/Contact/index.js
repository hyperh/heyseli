import React from 'react';
import Github from 'react-icons/lib/fa/github-square';
import Medium from 'react-icons/lib/fa/medium';
import Twitter from 'react-icons/lib/fa/twitter-square';
import { Link } from 'react-router';
import styles from './styles.scss';
import data from './data';
import HiddenEmail from './HiddenEmail';
import SocialIcon from './SocialIcon';

/* eslint-disable max-len */
const { email, twitter, medium, github } = data;
const Contact = () => (
  <div className={styles.wrapper}>
    <p>
      Hi! Thanks for visiting. I'm Heyse and I'm a full stack developer and
      designer. I love to bring ideas to life.
    </p>
    <p>
      I'm available for freelance work. If you would like to learn more about
      how I can help you make wonderful apps, you can contact me at{' '}
      <b>
        <i>
          <HiddenEmail email={email} />
        </i>
      </b>.
    </p>

    <p>
      You check out my portfolio <Link to="/work">here</Link>.
    </p>
    <div>
      <SocialIcon
        Icon={Github}
        header="Github"
        desc="Samples of my code and the contributions I've made to the open source
      community."
        url={github}
      />
      <SocialIcon
        Icon={Medium}
        header="Medium"
        desc="I write mostly about issues that I encounter when programming and how I
      solved it."
        url={medium}
      />
      <SocialIcon
        Icon={Twitter}
        header="Twitter"
        desc="I occasionally tweet."
        url={twitter}
      />
    </div>
  </div>
);

export default Contact;
