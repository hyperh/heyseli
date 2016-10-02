import React, { Component, PropTypes } from 'react';

class HiddenEmail extends Component {
  constructor(props) {
    super(props);
    this.showEmail = this.showEmail.bind(this);
    this.state = {
      email: '(Click to show)',
    };
  }

  showEmail(e) {
    this.setState({
      email: atob(this.props.email),
    });
    e.preventDefault();
  }

  render() {
    return (
      <a href="" ref={x => { this.text = x; }} onClick={this.showEmail}>
        {this.state.email}
      </a>
    );
  }
}

HiddenEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default HiddenEmail;
