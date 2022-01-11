import React from "react";
import RouterContext from './RouterContext'
import { createLocation } from '../history/util'


const Link = ({ to, children, ...rest }) => {
  return (
    <RouterContext.Consumer>
      {context => {
        const { history } = context;
        const location = createLocation(to)
        const href = '#' + location.pathname
        const props = {
          ...rest,
          href,
          onClick(event) {
            event.preventDefault();
            history.push(to);
            console.log('link.click')
          }
        };


        return <a {...props}>{children}</a>;
      }}
    </RouterContext.Consumer>
  );
}



export default Link;
