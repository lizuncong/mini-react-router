import React, { memo } from 'react';
import { HashRouter as Router, Redirect, Link, Route, Switch} from '../lib/index';
// import { HashRouter as Router, Redirect, Link, Route, Switch} from 'react-router-dom';

const Index = memo((props) => {
  console.log('props...', props);
  return (
      <div>
        用户
      </div>
  )
})

export default Index;
