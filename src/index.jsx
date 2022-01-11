import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Redirect, Link, Route, Switch} from '../lib/index';
import Home from './home';
import Profile from './profile';
import User from './user';

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log('Index.jsx')
    return (
        <Router>
          <div>React Router</div>
          <div><Link to="/home">首页</Link></div>
          {/*<div><Link to="/profile">个人中心</Link></div>*/}
          {/*<div><Link to="/user">用户</Link></div>*/}
          <Switch>
            <Route path="/home/:id"><Home /></Route>
            <Redirect to="/home" />
          </Switch>
        </Router>
    )
  }
}

render(<App />, document.getElementById('root'))
