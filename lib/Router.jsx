import React from "react";

import HistoryContext from "./HistoryContext.js";
import RouterContext from "./RouterContext.js";


class Router extends React.Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }

  constructor(props) {
    super(props);
    const { history } = props;
    this.state = {
      location: history.location
    };

    // StaticRouter才会接收staticContext，用于服务端渲染
    if (!props.staticContext) {
      this.unlisten = history.listen(location => {
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
