import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
// import { renderInput } from './inputField';

class PostsNew extends Component {

  // ??
  static contextTypes = {
    router: React.PropTypes.object
  };


  // helper function
  // 위의 contextTypes 설정이 없으면 페이지 이동이 되지 않는다..
  onSubmit(props){
    createPost(props, (err, result) => { // then을 사용하지 못하는 이유는??
      // console.info(result); // TODO then으로 간단하게 promise를 사용하는 방법을 알아보자.
      this.context.router.push('/');
    });
    // createPost(props).then(() => {
    //   // blog post has been created, navigate the user to the index
    //   // we navigate by calling this.context.router.push with the
    //   // new path to navigate to.
    //   this.context.router.push('/');
    // });
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
