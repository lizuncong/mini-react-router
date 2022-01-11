import React, { Component } from 'react';
import RouterContext from "./RouterContext.js";

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
              console.log('redirect....')
              history.push(to)
            }
          }
        </RouterContext.Consumer>
    )
  }
}

export default Index;





function Redirect({ computedMatch, to, push = false }) {
  return (
      <RouterContext.Consumer>
        {context => {

          const { history, staticContext } = context;

          const method = push ? history.push : history.replace;
          const location = createLocation(
              computedMatch
                  ? typeof to === "string"
                  ? generatePath(to, computedMatch.params)
                  : {
                    ...to,
                    pathname: generatePath(to.pathname, computedMatch.params)
                  }
                  : to
          );

          // When rendering in a static context,
          // set the new location immediately.
          if (staticContext) {
            method(location);
            return null;
          }

          return (
              <Lifecycle
                  onMount={() => {
                    method(location);
                  }}
                  onUpdate={(self, prevProps) => {
                    const prevLocation = createLocation(prevProps.to);
                    if (
                        !locationsAreEqual(prevLocation, {
                          ...location,
                          key: prevLocation.key
                        })
                    ) {
                      method(location);
                    }
                  }}
                  to={to}
              />
          );
        }}
      </RouterContext.Consumer>
  );
}


export default Redirect;
