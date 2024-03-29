// Notification.js
import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <>
        {['danger'].map((variant) => (
          <Alert key={variant} variant={variant}>
            {message}
          </Alert>
        ))}
      </>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
