var React = require('react');
var EmailValidator = require('email-validator');

var EmailField = React.createClass({
  getInitialState: function () {
    return {valid: true, value : ''}
  },
  onChange: function (e){
    if(!EmailValidator.validate(e.target.value)){
      this.setState({'valid' : false});
    }else{
      this.setState({'valid' : true});
    }
    this.setState({'value' : e.target.value});
  },
  render: function () {
    var formStyle = '';
    if(!this.state.valid){
      formStyle = 'form-group has-error';
    }else{
      formStyle = 'form-group';
    }

    var errorMsg = '';
    if(!this.state.valid){
      errorMsg = 'Email is invalid';
    }

    return (
      <div className={formStyle}>
        <input className='form-control' onChange={this.onChange} placeholder="Email" required autoFocus="true" />
        <span>{errorMsg}</span>
      </div>
    );
  }
});

module.exports = EmailField;
