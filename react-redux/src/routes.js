import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index'; // index page
import PostsNew from './components/posts_new'; // create new post page
import PostsShow from './components/posts_show'; // show post

// 없는 path로 들어갔을 때 404 페이지로 이동시키려면 어떻게 설정을 해야 하는가??
export default (
  <Route path='/' component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path='posts/new' component={PostsNew} />
    <Route path='posts/:id' component={PostsShow} />
  </Route>
);

// this.props.params.id
