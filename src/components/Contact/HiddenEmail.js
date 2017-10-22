import React, { Component, PropTypes } from 'react';

class HiddenEmail extends Component {
  constructor(props) {
    super(props);
    this.showEmail = this.showEmail.bind(this);
    this.state = {
      isVisible: false,
      email: props.email
    };
  }

  showEmail(e) {
    this.setState({
      isVisible: true,
      email: atob(this.props.email)
    });
    e.preventDefault();
  }

  render() {
    const { isVisible, email } = this.state;
    return (
      <span>
        {isVisible ? (
          <span>{email}</span>
        ) : (
          <a
            href=""
            ref={x => {
              this.text = x;
            }}
            onClick={this.showEmail}
          >
            (Click to show)
          </a>
        )}
      </span>
    );
  }
}

HiddenEmail.propTypes = {
  email: PropTypes.string.isRequired
};

export default HiddenEmail;
