var React = require('react');

var PasswordField = React.createClass({
  getInitialState: function () {
    return {valid: true};
  },
  onChange: function (e) {
    if(e.target.value !== ''){
      this.setState.valid = true;
    }else{
      this.setState.valid = false;
    }
  },
  render: function () {
    var formStyle = '';
    if(this.state.valid){
      formStyle='form-group';
    }else{
      formStyle='form-group has-error';
    }
    return (
      <div className={formStyle}>
        <input className="form-control" placeholder="Password" type="password" required onChange={this.onChange}/>
      </div>
    );
  }
});

module.exports = PasswordField;
