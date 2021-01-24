import React, { Component } from 'react';
import { Consumer } from './context';
class Index extends Component{

  render(){
    return(
        <Consumer>
          {
            (context) => {
              console.log('context...', context);
              return null
            }
          }
        </Consumer>
    )
  }
}

export default Index
