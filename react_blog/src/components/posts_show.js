// @ component
// import React, { Component } from 'react';
//
// class PostsShow extends Component {
//   render() {
//     return <div>show post {this.props.params.id}</div>;
//   }
// }
//
// export default PostsShow;

// @ component
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
  static contextTypes = {
    router : PropTypes.object
  };

  componentWillMount(props) {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick(){
    this.props.deletePost(this.props.params.id).then(()=>{
      this.context.router.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if(!post){
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button className="btn btn-danger pull-right" onClick={this.onDeleteClick.bind(this)}>Delete</button>
        <h3>{post.title}</h3>
        <h6>categories : {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function masStateToProps(state){
  return {
    post : state.posts.post
  }
}

export default connect(masStateToProps, { fetchPost, deletePost })(PostsShow);
