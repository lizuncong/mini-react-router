import React, { Component } from 'react';
import { Consumer } from './context';

class Index extends Component{
  constructor(){
    super();
  }

  render(){
    const { children, to } = this.props;
    return (
        <Consumer>
          {
            context => {
              const { history } = context;
              return (
                  <a
                    onClick={() => {
                      history.push(to)
                    }}
                  >
                    {children}
                  </a>
              )
            }
          }
        </Consumer>
    )
  }
}

export default Index
