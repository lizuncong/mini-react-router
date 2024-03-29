import React, { Component } from 'react';
import { createHashHistory } from '../history'
import Router from './Router'


class HashRouter extends Component {
  history = createHashHistory(this.props);

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default HashRouter
