import { getHashPath, getDOMLocation, createLocation } from './util'

function createHashHistory(props) {

  let listeners = [];

  function handleHashChange(){
    console.log('HashChange...')
    const location = getDOMLocation()
    // 通过点击Link跳转引起的hash值变化的，直接返回
    if(history.location.pathname === location.pathname){ return }
    // 通过浏览器前进后退，自定义a标签，window.location.hash 触发的hash值变化的，走下面的逻辑
    console.log('前进后退..')
    const action = 'POP'
    setState({
      action,
      location
    })
  }
  function setState(nextState){
    history.action = nextState.action;
    history.location = nextState.location
    listeners.forEach(fn => {
      fn.apply(void 0, [history.location, history.action])
    })
  }
  function listen(listener) {
    listeners.push(listener)
    if(listeners.length === 1){
      window.addEventListener('hashchange', handleHashChange);
    }
    return function () {
      console.log('取消监听。。')
      listeners = listeners.filter(item => item !== listener)
      window.removeEventListener('hashchange', handleHashChange);
    };
  }
  function push(path) {
    console.log('push...', path)
    window.location.hash = path;
    setState({
      action: 'PUSH',
      location: createLocation(path)
    })
  }
  const path = getHashPath()
  const initialLocation = createLocation(path)
  return {
    action: 'POP',
    listen,
    push,
    location: initialLocation,
  };
}


export default createHashHistory
