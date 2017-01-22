import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
      this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id).then(()=>{
      this.context.router.push('/');
    });
  }

  render () {
    const { post } = this.props; // this.props.post
    // loading time
    if(!this.props.post){ // when data is null
      return <div>loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/" className="btn btn-default">Back</Link>
        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { post : state.posts.post };
}

// mapStateToProps, action(dispatch), class
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
