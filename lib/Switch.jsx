import React, { Component } from 'react';
import { pathToRegexp } from 'path-to-regexp';
import { Consumer } from './context';

class Index extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { children } = this.props;
    return (
        <Consumer>
          {
            context => {
              const { history, location: { pathname } } = context;
              for(let i = 0; i < children.length; i++){
                let child = children[i];
                let path = child.props.path || ''; // Redirect组件没有path属性
                let reg = pathToRegexp(path, [], { end: false })
                if(reg.test(pathname)){
                  return child;
                }
              }
              return null;
            }
          }
        </Consumer>
    )
  }
}

export default Index
