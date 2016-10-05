import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import OpenBtn from 'react-icons/lib/md/menu';
import CloseBtn from 'react-icons/lib/md/close';

import styles from './Sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      open: false,
    };
  }

  onClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const myClass = classnames({
      [styles.wrapper]: true,
      [styles.open]: this.state.open,
      [styles.closed]: !this.state.open,
    });

    return (
      <div>
        <OpenBtn className={styles.btn} onClick={this.onClick} />

        <div className={myClass}>
          {this.state.open ? <CloseBtn className={styles.btn} onClick={this.onClick} /> : null}
          <div className={styles.name}>heyse li</div>
          <div className={styles.links}>
            <div className={styles.item} onClick={this.onClick}>
              <Link to="/contact">contact</Link>
            </div>
            <div className={styles.item} onClick={this.onClick}>
              <Link to="/work">work</Link>
            </div>
            <div className={styles.item} onClick={this.onClick}>
              <Link to="/publications">publications</Link>
            </div>
            <div className={styles.item} onClick={this.onClick}>
              <Link to="/resume">resume</Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Sidebar;
