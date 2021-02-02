import React, { Component } from 'react';

class Index extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
          用户详情：{this.props.match.params.id}
        </div>
    )
  }
}

export default Index;
