import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import 'normalize.css';

export default class Page extends Component {
  public render() {
    return (
      <>
        <Meta />
        <Header />
        {this.props.children}
      </>
    );
  }
}
