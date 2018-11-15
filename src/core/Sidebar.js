import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { MdMenu as OpenBtn, MdClose as CloseBtn } from 'react-icons/md';

import styles from './Sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      open: false
    };
  }

  onClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const myClass = classnames({
      [styles.wrapper]: true,
      [styles.open]: this.state.open,
      [styles.closed]: !this.state.open
    });

    return (
      <div>
        <OpenBtn className={styles.btn} onClick={this.onClick} />

        <div className={myClass}>
          {this.state.open ? (
            <CloseBtn className={styles.btn} onClick={this.onClick} />
          ) : null}
          <div className={styles.name}>heyse li</div>
          <div className={styles.links}>
            <div className={styles.item}>
              <Link to="/contact" onClick={this.onClick}>
                contact
              </Link>
            </div>
            <div className={styles.item}>
              <Link to="/work" onClick={this.onClick}>
                work
              </Link>
            </div>
            <div className={styles.item}>
              <Link to="/publications" onClick={this.onClick}>
                publications
              </Link>
            </div>
            <div className={styles.item}>
              <Link to="/resume" onClick={this.onClick}>
                resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
