import React, { Component } from 'react';
import { Provider } from './context'
class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      }
    }
  }
  componentDidMount() {
    // window.location.hash = window.location.hash || '/';
  }

  render(){
    const { children } = this.props;
    return(
        <Provider value={{ a: 1 }}>
          {children}
        </Provider>
    )
  }
}

export default Index
