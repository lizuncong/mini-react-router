import React from "react";

import HistoryContext from "./HistoryContext.js";
import RouterContext from "./RouterContext.js";


class Router extends React.Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }

  constructor(props) {
    super(props);

    this.state = {
      location: props.history.location
    };


    if (!props.staticContext) {
      this.unlisten = props.history.listen(location => {
        this.setState({ location });
      });
    }
  }


  componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  }

  render() {
    return (
        <RouterContext.Provider
            value={{
              history: this.props.history,
              location: this.state.location,
              match: Router.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext
            }}
        >
          <HistoryContext.Provider
              children={this.props.children || null}
              value={this.props.history}
          />
        </RouterContext.Provider>
    );
  }
}


export default Router;
