import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log(info);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (<div> ERROR!! </div>);
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
