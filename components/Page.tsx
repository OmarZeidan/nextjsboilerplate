import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

export default class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        <Header />
        {this.props.children}
      </>
    );
  }
}
