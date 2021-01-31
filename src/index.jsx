import React, { Component } from 'react';
import { render } from 'react-dom';
// import { HashRouter as Router, Route} from 'react-router-dom';
import { HashRouter as Router, Link, Route} from '../lib/index';
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
            <Link to="/home">首页</Link>
          </div>
           <Route exact path="/home">
             <Home />
           </Route>
           <Route path="/profile">
             <Profile/>
           </Route>
           <Route path="/user" component={User} />
        </Router>
    )
  }
}

render(<App />, document.getElementById('root'))
