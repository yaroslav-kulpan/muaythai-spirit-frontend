import React, { Component } from 'react';
import { ErrorsIndicators } from '../ErrorsIndicators';

export class ErrorBoundaries extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorsIndicators />;
    }

    return this.props.children;
  }
}
