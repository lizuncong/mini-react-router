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
import React from "react";
import RouterContext from "./RouterContext.js";
// import matchPath from "./matchPath.js";

function isEmptyChildren(children) {
  return React.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  const value = children(props);

  warning(
      value !== undefined,
      "You returned `undefined` from the `children` function of " +
      `<Route${path ? ` path="${path}"` : ""}>, but you ` +
      "should have returned a React element or `null`"
  );

  return value || null;
}

/**
 * The public API for matching a single path and rendering.
 */
class Route extends React.Component {
  render() {
    return (
        <RouterContext.Consumer>
          {context => {
            const location = this.props.location || context.location;
            const match = this.props.computedMatch
                ? this.props.computedMatch // <Switch> already computed the match for us
                : this.props.path
                    ? matchPath(location.pathname, this.props)
                    : context.match;

            const props = { ...context, location, match };

            let { children, component, render } = this.props;

            // Preact uses an empty array as children by
            // default, so use null if that's the case.
            if (Array.isArray(children) && children.length === 0) {
              children = null;
            }

            return (
                <RouterContext.Provider value={props}>
                  {props.match
                      ? children
                          ? typeof children === "function"
                              ? __DEV__
                                  ? evalChildrenDev(children, props, this.props.path)
                                  : children(props)
                              : children
                          : component
                              ? React.createElement(component, props)
                              : render
                                  ? render(props)
                                  : null
                      : typeof children === "function"
                          ? __DEV__
                              ? evalChildrenDev(children, props, this.props.path)
                              : children(props)
                          : null}
                </RouterContext.Provider>
            );
          }}
        </RouterContext.Consumer>
    );
  }
}

export default Route;
