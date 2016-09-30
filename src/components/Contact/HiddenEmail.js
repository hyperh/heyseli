import React, { Component, PropTypes } from 'react';

class HiddenEmail extends Component {
  constructor(props) {
    super(props);
    this.showEmail = this.showEmail.bind(this);
    this.state = {
      email: '(Click to show)',
    };
  }

  showEmail() {
    this.setState({
      email: atob(this.props.email),
    });
  }

  render() {
    return (
      <span ref={x => { this.text = x; }} onClick={this.showEmail}>
        {this.state.email}
      </span>
    );
  }
}

HiddenEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default HiddenEmail;
