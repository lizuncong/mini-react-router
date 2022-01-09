// import React, { Component } from 'react';
// import {pathToRegexp} from 'path-to-regexp';
// import { Consumer } from './context';
// class Index extends Component{
//
//   render(){
//     const { path, component: Component, exact = false, children } = this.props;
//     return(
//         <Consumer>
//           {
//             ({ location, history }) => {
//               const { pathname } = location;
//               let keys = [];
//               const reg = pathToRegexp(path, keys, { end: exact });
//               keys = keys.map(item => item.name);
//               const result = pathname.match(reg);
//               let [url, ...values] = result || [];
//               let props = {
//                 location,
//                 history,
//                 match: {
//                   params: keys.reduce((obj, current, idx) => {
//                     obj[current] = values[idx]
//                     return obj;
//                   }, {})
//                 },
//               }
//               if(result){
//                 return Component ? <Component {...props} /> : children
//               }
//               return null
//             }
//           }
//         </Consumer>
//     )
//   }
// }
//
// export default Index
