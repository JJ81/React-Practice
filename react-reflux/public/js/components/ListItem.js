import React from 'react';

var ListItem = React.createClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});


export default ListItem;
