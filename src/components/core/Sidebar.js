import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

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
        <button style={{position: 'fixed'}} onClick={this.onClick}>OPEN</button>

        <div className={myClass}>
          <button onClick={this.onClick}>CLOSE</button>
          <div className={styles.name}>Heyse Li</div>
          <div className={styles.links}>
            <div className={styles.item} onClick={this.onClick}><Link to="/contact">Contact</Link></div>
            <div className={styles.item} onClick={this.onClick}><Link to="/work">Work</Link></div>
            <div className={styles.item} onClick={this.onClick}><Link to="/publications">Publications</Link></div>
          </div>
        </div>
      </div>

    );
  }
}

export default Sidebar;
