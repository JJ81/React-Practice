// @ Component
import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';


class PostsNew extends Component {

  render (){
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // this.props.fields.title
    // this.props.handleSubmit
    // console.log(title);

    return (
      <div>
        <div className="text-right">
          <Link to="/" className="btn btn-info">Main</Link>
        </div>

        <form onSubmit={handleSubmit(this.props.createPost)} className="form-blog">
          <h3>Create A New Post</h3>

          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label>Title</label>
            <input type="text" className="form-control" {...title} required autoFocus autoComplete="off" />
            <div className="text-help">
              { title.touched ?  title.error : '' }
            </div>
          </div>

          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} required autoComplete="off" />
            <div className="text-help">
              { categories.touched ? categories.error : ''}
            </div>
          </div>

          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label>Content</label>
            <textarea className="form-control" {...content} required autoComplete="off" />
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger btn-submit">Cancel</Link>
        </form>
      </div>
    );
  }
}

// 각 필드에 대한 타당성 검사를 수행한다.
function validate(values) {
  const errors = {};

  if(!values.title){
    errors.title = 'Enter a title';
  }

  if(!values.categories){
    errors.categories = 'Enter categories';
  }

  if(!values.content){
    errors.content = 'Enter some content';
  }



  return errors;
}

// connect : first argument is mapStateToProps, 2nd is mapDispatchProps,
// reduxForm : 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchProps
export default reduxForm({
  form : 'PostsNewForm',
  fields : ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
