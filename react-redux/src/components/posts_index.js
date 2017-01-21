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

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary btn-md">Add a Post</Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts }, dispatch);
// }


//export default connect(null, mapDispatchToProps)(PostsIndex);
// boilerplate code withtout mapDispatchToProps func.

// 아래와 같이 간단하게 코드를 정리할 수 있다. 더불어 bindActionCreators가 필요가 없어진다.
export default connect(null, { fetchPosts })(PostsIndex);
