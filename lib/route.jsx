import React, { Component } from 'react';
import {pathToRegexp} from 'path-to-regexp';
import { Consumer } from './context';
class Index extends Component{

  render(){
    const { path, component: Component, exact = false, children } = this.props;
    return(
        <Consumer>
          {
            ({ location }) => {
              const { pathname } = location;
              const reg = pathToRegexp(path, [], { end: exact });
              const result = pathname.match(reg);
              if(result){
                return Component ? <Component /> : children
              }
              return null
            }
          }
        </Consumer>
    )
  }
}

export default Index
