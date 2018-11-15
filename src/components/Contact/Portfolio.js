import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './SocialIcon.scss';

const Portfolio = ({ Icon, header, desc, url }) => (
  <Link to={url} className={styles.wrapper}>
    <Icon className={styles.icon} />
    <div className={styles.text}>
      <div className={styles.header}>{header}</div>
      <div>{desc}</div>
    </div>
  </Link>
);

Portfolio.propTypes = {
  Icon: PropTypes.func,
  header: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string
};

export default Portfolio;