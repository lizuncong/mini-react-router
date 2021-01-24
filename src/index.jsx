import React, { Component } from 'react';
import { render } from 'react-dom';
// import { HashRouter as Router, Route} from 'react-router-dom';
import { HashRouter as Router, Route} from '../lib/index';
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
           <Route path="/home">
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
