import React from "react";
import { pathToRegexp } from 'path-to-regexp'
import RouterContext from "./RouterContext.js";


class Route extends React.Component {
  render() {
    const { path, component: Component, exact = false, children } = this.props;
    return (
        <RouterContext.Consumer>
          {context => {
              const { pathname } = context.location;
              let keys = [];
              const reg = pathToRegexp(path, keys, { end: exact });
              keys = keys.map(item => item.name);
              const result = pathname.match(reg);
              let [url, ...values] = result || [];
              const match = {
                isExact: url === pathname,
                url,
                path,
                params: keys.reduce((obj, current, idx) => {
                  obj[current] = values[idx]
                  return obj;
                }, {})
              };
              let props = {
                ...context,
                location,
                match,
              }
              if(result){
                  return Component ? <Component {...props} /> : children
              }
              return null
            }
          }
        </RouterContext.Consumer>
    );
  }
}

export default Route;
