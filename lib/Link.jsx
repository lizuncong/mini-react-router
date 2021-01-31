import React, { Component } from 'react';
import { Consumer } from './context';
class Index extends Component{
  constructor(){
    super();
  }

  render(){
    return (
        <Consumer>
          {
            context => {
              return (
                  <a
                    onClick={() => {

                    }}
                  >
                    ha
                  </a>
              )
            }
          }
        </Consumer>
    )
  }
}

export default Index
