import React, { memo } from 'react';
import { HashRouter as Router, Redirect, Link, Route, Switch} from '../lib/index';
import UserAdd from './userAdd';
import UserList from './userList';
import UserDetail from './UserDetail';

const Index = memo((props) => {
  console.log('props...', props);
  return (
      <div>
        用户，这里有二级路由
        <div>
            <div><Link to="/user/add">用户添加</Link></div>
            <div><Link to="/user/list">用户列表</Link></div>
        </div>
        <div><Route path="/user/add" component={UserAdd}></Route></div>
        <div><Route path="/user/list" component={UserList}></Route></div>
        <div><Route path="/user/detail/:id" component={UserDetail}></Route></div>
      </div>
  )
})

export default Index;
