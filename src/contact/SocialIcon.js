import PropTypes from 'prop-types';
import React from 'react';
import styles from './SocialIcon.scss';
import ExternalLink from '../core/ExternalLink';

const SocialIcon = ({ Icon, header, desc, url }) => (
  <ExternalLink to={url} className={styles.wrapper}>
    <Icon className={styles.icon} />
    <div className={styles.text}>
      <div className={styles.header}>{header}</div>
      <div>{desc}</div>
    </div>
  </ExternalLink>
);

SocialIcon.propTypes = {
  Icon: PropTypes.func,
  header: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string
};

export default SocialIcon;
