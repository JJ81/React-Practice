import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'; // a tag or linkage

// export default () => {
//     return <div>List of blog posts</div>;
// }

class PostsIndex extends Component {
  componentWillMount() { // call an action creator to fetch posts data.
    console.log('Mount');
    this.props.fetchPosts(); // from action.
  }

  renderPosts () {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className="pull-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary btn-md">Add a Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

function mapStateToProps(state) {
  return { posts : state.posts.all };
}


//export default connect(null, mapDispatchToProps)(PostsIndex);
// boilerplate code withtout mapDispatchToProps func.

// 아래와 같이 간단하게 코드를 정리할 수 있다. 더불어 bindActionCreators가 필요가 없어진다.
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
