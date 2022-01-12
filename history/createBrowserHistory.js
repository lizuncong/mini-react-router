import {createLocation, getDOMLocation, getHashPath} from "./util";

function createBrowserHistory(props) {

  let listeners = [];
  const globalHistory = window.history;
  let history = {};
  function handlePopState(){
    console.log('handlePopState...')
    const location = getDOMLocation()
    console.log('前进后退..')
    const action = 'POP'
    setState({
      action,
      location
    })
  }
  function setState(nextState){
    history = { ...history, action: nextState.action, location: nextState.location }
    listeners.forEach(fn => {
      fn.apply(void 0, [history.location, history.action])
    })
  }
  function listen(listener) {
    listeners.push(listener)
    if(listeners.length === 1){
      window.addEventListener('popstate', handlePopState);
    }
    return function () {
      console.log('取消监听。。')
      listeners = listeners.filter(item => item !== listener)
      window.removeEventListener('popstate', handlePopState);
    };
  }
  function push(path) {
    console.log('push...', path)
    globalHistory.pushState({}, null, path)
    setState({
      action: 'PUSH',
      location: createLocation(path)
    })
  }
  const path = getHashPath()
  const initialLocation = createLocation(path)

  history = {
    action: 'POP',
    listen,
    push,
    location: initialLocation,
  };
  return history;
}

export default createBrowserHistory
