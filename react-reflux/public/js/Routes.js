import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Base from './Base';
import page1 from './Page1';
import page2 from './Page2';
import Home from './Home';
import NoMatch from './NoMatch';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Base}>
      <Route path="/home" component={Home}/>
      <Route path="/page1" component={page1}/>
      <Route path="/page2" component={page2} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
);


export default Routes;
