import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Redirect, Link, Route, Switch} from '../lib/index';
// import { HashRouter as Router, Redirect, Link, Route, Switch} from 'react-router-dom';
import Home from './home';
import Profile from './profile';
import User from './user';

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <Router>
          <div>
            <Link to="/home">首页</Link>
            <Link to="/profile">个人中心</Link>
            <Link to="/user">用户</Link>
          </div>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/user" component={User} />
            <Redirect to="/home"></Redirect>
          </Switch>
        </Router>
    )
  }
}

render(<App />, document.getElementById('root'))
