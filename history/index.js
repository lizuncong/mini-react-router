

function createHashHistory(props) {

  let listeners = [];

  function handleHashChange(){
    console.log('HashChange...')
  }
  function listen(listener) {
    listeners.push(listener)
    if(listeners.length === 1){
      window.addEventListener('hashchange', handleHashChange);
    }
    return function () {
      listeners = listeners.filter(item => item !== listener)
      window.removeEventListener('hashchange', handleHashChange);
    };
  }


  return {
    action: 'POP',
    listen
  };
}



export {
  createHashHistory
}
