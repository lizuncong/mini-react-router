import React, { forwardRef } from "react";
import RouterContext from './RouterContext'
import { createLocation } from '../history/util'



function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}



/**
 * The public API for rendering a history-aware <a>.
 */
const Link = ({ to, children, ...rest }) => {
  return (
    <RouterContext.Consumer>
      {context => {
        const { history } = context;
        //
        // hash: ""
        // pathname: "/home"
        // search: ""
        // state: null
        const location = createLocation(to)
        console.log('location...', location)
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
