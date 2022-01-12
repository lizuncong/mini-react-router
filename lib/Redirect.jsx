import React, { Component } from 'react';
import RouterContext from "./RouterContext.js";


class Lifecycle extends React.Component {
  componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  }

  componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  }

  render() {
    return null;
  }
}


class Index extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { to } = this.props;
    return (
        <RouterContext.Consumer>
          {
            context => {
              const { history, staticContext } = context;
              return (
                  <Lifecycle
                      onMount={() => {
                        history.push(to)
                      }}
                  />
              )
            }
          }
        </RouterContext.Consumer>
    )
  }
}

export default Index;

