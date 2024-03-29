### 实现前端路由需要解决的两个关键问题：
在平时开发过程中，可以发现，前端路由不管是react router还是vue router。路由改变，浏览器url也会改变，但是并不会引起浏览器重新刷新

因此实现前端路由比较关键的两个问题就是：

1. 如何改变URL而不会引起页面刷新。
2. 如何检测URL变化，并替换页面内容。

### 改变URL的方式只有这几种情况
1. 通过浏览器前进后退改变URL
2. 通过标签，如点击<a>标签改变URL。
3. 通过window.location改变URL。比如，window.location.href = '#/home'

### 前端路由主流的实现方式
1. hash
   - hash是URL中hash(#)及后面的那部分，常用做锚点在页面内导航。*改变URL中的hash部分不会引起页面刷新*。    
   - 通过 `hashchange` 事件监听URL的变化。以下三种方式均可以触发hashchange事件
        + 浏览器前进后退。
        + 点击a标签修改URL。
        + 通过window.location.href修改URL
```javascript
var route = document.getElementById('route');
function onHashChange(){
    switch (location.hash) {
        case '#/home':
            route.innerHTML = 'Home'
            return
        case '#/about':
            route.innerHTML = 'About'
            return
        default:
            return
    }
}
// 1.浏览器前进后退。2.点击a标签修改URL。3.通过window.location.href修改URL
// 这三种方式均会触发hashchange事件。
window.addEventListener('hashchange', onHashChange)
```
2. history
   - history提供了 `pushState` 和 `replaceState` 两个方法，**这两个方法改变URL的path部分不会引起页面刷新**。    
   - history 提供类似 `hashchange` 事件的 `popstate`事件。    
   - popState事件的不同     
             + 通过浏览器前进后退改变URL时 **会触发** popState事件。    
             + 通过 `pushState/replaceState` 改变URL **不会触发**popState事件。  
             + 通过标签改变URL **不会触发** popState事件。  
   - 可以拦截 `pushState/replaceState` 的 调用和 **标签的点击事件** 来检测URL变化，所以监听URL变化可以实现，只是没有hashchange那么方便。
   - 在实际的react-router-dom中，只会监听通过浏览器前进后退改变url以及通过react router的<Link>路由变化。
```javascript
var route = document.getElementById('route');
function onPopState () {
    console.log('onPopState...', location.pathname)
    switch (location.pathname) {
        case '/home':
            route.innerHTML = 'Home'
            return
        case '/about':
            route.innerHTML = 'About'
            return
        default:
            return
    }
}
// 1.只有浏览器前进后退会触发popstate事件
// 2.点击a标签改变URL并不会触发popstate事件。
// 3.通过 replaceState或者 pushState不会触发popstate
window.addEventListener('popstate', onPopState)
onPopState()
var links = document.querySelectorAll('a[href]')
links.forEach(function(link){
   link.addEventListener('click', function(e){
       e.preventDefault()
       history.pushState(null, '', link.getAttribute('href'))
       // history.pushState不会触发popState事件，因此需要手动调用onPopState
       onPopState();
   })
})
```


### react router
react-router这个包是react router官方独立出来的一个与平台无关的包，既可以用于web，又可以用于react native。
如果用于web，则需要配合react-router-dom这个包使用，因为这个包提供了特定于浏览器的接口，比如hash以及h5的pushState等
路由跳转api。

- HistoryContext
- RouterContext
- Router.jsx
- Route.jsx
- Switch.jsx
- Redirect.jsx

### react-router-dom
用于web端的路由，提供了特定于浏览器的api，比如HashRouter，BrowserRouter，Link等
- HashRouter.jsx
- Link.jsx
- BrowserRouter.jsx

### react router dom中BrowserRouter和HashRouter的对比
- HashRouter可以监听通过window.location.hash改变的路由变化并且替换页面内容。而BrowserRouter并不会监听window.location.href
改变的路由
- HashRouter可以监听开发者通过`<a href="#/home">`标签定义的hash路由变化，但是不会监听`<a href="/home">`引起的路由变化，
而BrowserRouter并不会监听`<a href="/home">`。

***因此建议使用react router官方提供的<Link>组件导航***

- 使用BrowserRouter的时候请注意，如果访问的路由：`https://localhost:8080/user/list`，此时如果直接刷新浏览器，那么访问的实际上是服务器的路径，如果服务器没有这个路径，那么会看到浏览器显示
 cannot get /user/list的提示。因此，如果在开发环境中，使用webpack-dev-server需要配置historyApiFallback将所有的不存在的路径重定向到根目录下。生产环境则可以通过nginx代理。

