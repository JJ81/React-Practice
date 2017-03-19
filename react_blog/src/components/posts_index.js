// @ Component
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index'; // 데이터를 호출하는 부분 액션
import { Link } from 'react-router';

class PostsIndex extends Component {
  // life cycle method
  componentWillMount(){
    // console.log('call action creator to fetch posts data');
    this.props.fetchPosts(); // action을 props에 바인딩되어서 이와 같이 호출할 수 있다.
  }

  renderPosts () {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <strong>{post.title}</strong>
            <span className="pull-right categories">{post.categories}</span>
          </Link>
        </li>
      );
    });
  }


  render () {
    return  (
      <div>
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">Add a post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state){
  return {
    posts : state.posts.all
  };
}

// 바로 아래의 코드를 이와 같이 사용할 수 있다.
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

// function mapDispatchToProps(dispatch){ // props에 맵핑!!
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(PostsIndex);

//export default PostsIndex;

// export default () => {
//   return <div>List of blog posts.</div>;
// };
