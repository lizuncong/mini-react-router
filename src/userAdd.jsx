import React, { Component } from 'react';

class Index extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log('添加用户...', this.props)
    return (
        <div>
          添加用户
        </div>
    )
  }
}

export default Index;
