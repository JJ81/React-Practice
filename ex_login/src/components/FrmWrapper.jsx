var React = require('react');
var ReactDOM = require('react-dom');
var EmailField = require('./EmailField.jsx');
var PasswordField = require('./PasswordField.jsx');

var FrmWrapper = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var _email = this.refs.emailInput.state.valid;
    var _pass = this.refs.passInput.state.valid;
    if(_email && _pass){
        alert('submit!');
        e.target.submit();
    }
  },
  render: function () {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default">
          <div className="panel-heading">
	    	     <h3 className="panel-title">Login</h3>
			 	  </div>
          <div className="panel-body">
            <form acceptCharset="UTF-8" role="form" onSubmit={this.onSubmit}>
              <EmailField ref="emailInput" />
              <PasswordField ref="passInput" />
              <button className="btn btn-lg btn-success btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FrmWrapper;
