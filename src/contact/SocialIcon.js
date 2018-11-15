import PropTypes from 'prop-types';
import React from 'react';
import styles from './SocialIcon.scss';

const SocialIcon = ({ Icon, header, desc, url }) => (
  <a href={url} className={styles.wrapper}>
    <Icon className={styles.icon} />
    <div className={styles.text}>
      <div className={styles.header}>{header}</div>
      <div>{desc}</div>
    </div>
  </a>
);

SocialIcon.propTypes = {
  Icon: PropTypes.func,
  header: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string
};

export default SocialIcon;
