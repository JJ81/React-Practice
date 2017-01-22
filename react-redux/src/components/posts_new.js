import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props){

    console.log('createPost');
    console.log(createPost);
    console.log(this.props.createPost); // undefined

    // createPost(props).then(()=>{
    //   console.log('check create post');
    // });

    // this.props.createPost(props).then(()=>{
    //   this.context.router.push('/');
    // });

    // createPost(props, (err, result) => {
    //   // console.info(result);
    //   this.context.router.push('/');
    // });

    createPost(props).then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    const { fields : {title, categories, content }, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-write-post">
          <h3 className="page-header">
            Create A New Post
            <Link to="/" className="btn btn-warning pull-right">Back</Link>
          </h3>
          <Field className="form-control" name="title" component={renderInput} label="Title" type="text" placeholder="Title" autoFocus required />
          <Field className="form-control" name="categories" placeholder="categories" type="text" component={renderInput} label="categories" required />
          <Field className="form-control" name="content" type="textarea" placeholder="Write somethig" component={renderTextarea} label="content" required />

          <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button> &nbsp;
          <button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </form>
      </div>
    );
  }
}


const validate = values =>{
  const errors = {};

  if(!values.title){
    errors.title = 'Requred';
  }

  if(!values.categories){
    errors.categories = 'Required';
  }

  if(!values.content){
    errors.content = 'Required';
  }

  return errors;
}


// TODO 아래 컴퍼넌트는 분리하여 재사용할 수 있도록 한다.

// input 처리 컴퍼넌트
const renderInput = ({ input, label, type, meta: { touched, invalid, error } }) => (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label>{label}</label>
    <input type={type} placeholder={label} className="form-control" {...input} />
    <div className="text-help" style={{color: 'red'}}>
      { touched ? error : '' }
    </div>
  </div>
)

// textarea 컴퍼넌트
const renderTextarea = ({ input, label, type, meta: {touched, invalid, error }}) => (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label>{label}</label>
    <textarea className="form-control" {...input} placeholder={label} />
    <div className="text-help" style={{color: 'red'}}>
      { touched ? error : '' }
    </div>
  </div>
);


// connect : 1st argument is mapStateToProps, 2nd is masDispatchToProps
// reduxForm : 1st is form config, 2nd is masStateToProps, 3rd is mapDispatchToProps




export default reduxForm({
  form: 'PostsNewForm',
  validate, // validation 등록
  fields : ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);

// user types somethig in ....record in on app like below
// state === {
//   form : {
//     PostsNewForm: {
//       title : '....',
//       categories : '....',
//       content: '....'
//     }
//   }
// }
