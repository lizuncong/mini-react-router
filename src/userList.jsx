import React, { Component } from 'react';
import { HashRouter as Router, Redirect, Link, Route, Switch} from '../lib/index';

class Index extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
            用户列表
            <div>
              <span>
                <Link to="/user/detail/1">用户1</Link>
                <Link to="/user/detail/2">用户2</Link>
                <Link to="/user/detail/3">用户3</Link>
              </span>
            </div>
        </div>
    )
  }
}

export default Index;
