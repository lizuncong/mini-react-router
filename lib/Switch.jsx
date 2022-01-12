import React from "react";
import { pathToRegexp } from 'path-to-regexp';
import RouterContext from "./RouterContext.js";


class Switch extends React.Component {
  render() {
    return (
        <RouterContext.Consumer>
          {context => {

            const location = context.location;

            let element;

            React.Children.forEach(this.props.children, child => {
              if (element == null && React.isValidElement(child)) {

                const path = child.props.path || ''
                const reg = pathToRegexp(path, [], { end: false })
                if(reg.test(location.pathname)){
                   element = child;
                }
              }
            });
            return element || null;
          }}
        </RouterContext.Consumer>
    );
  }
}


export default Switch;
