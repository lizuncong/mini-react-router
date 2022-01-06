import React, { Component } from 'react';
import { createHashHistory } from '../history'
import Router from './Router'
// import { Provider } from './context'
// class Index extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       location: {
//         pathname: window.location.hash.slice(1) || '/'
//       }
//     }
//   }
//   componentDidMount() {
//     const { location } = this.state;
//     window.location.hash = window.location.hash || '/';
//     window.addEventListener('hashchange', () => {
//       this.setState({
//         location: {
//           ...location,
//           pathname: window.location.hash.slice(1) || '/'
//         }
//       })
//     })
//   }
//
//   render(){
//     const { children } = this.props;
//     const { location } = this.state;
//     const value = {
//       location,
//       history:{
//         push(to){
//           window.location.hash = to;
//         }
//       }
//     }
//     return(
//         <Provider value={value}>
//           {children}
//         </Provider>
//     )
//   }
// }
//
// export default Index


class HashRouter extends Component {
  history = createHashHistory(this.props);

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default HashRouter
