import React from 'react';
import ListItem from './ListItem';
import Reflux from 'reflux';
import Actions from '../actions';
import IngredientStore from '../ingredient-store';
import HTTP from '../../../services/httpservice';

var List = React.createClass({
  mixins:[
    Reflux.listenTo(IngredientStore, 'onChange')
  ],

  getInitialState: function() {
    return {ingredients:[], newText: ''};
  },

  componentWillMount: function() {
    this.fetchData();
  },

  fetchData: function () {
    HTTP.get('/ingredients')
    .then(function (data){
      this.setState({ingredients: data});
    }.bind(this));
  },

  onChange: function(event, ingredients) {
    this.setState({ingredients: ingredients});
  },

  onInputChange: function(e) {
    this.setState({newText: e.target.value});
  },

  onClick: function(e) {
    if (this.state.newText) {
      var _data = {
        id : (this.state.ingredients.length+1).toString(),
        data: this.state.newText
      };

      HTTP.post('/ingredients', _data).then(function (data){
        this.fetchData();
      }.bind(this));
    }



    this.setState({newText: ''});
  },
  render: function() {
    var listItems = this.state.ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (
      <div>
        <input
        placeholder="Add Item"
        value={this.state.newText}
        onChange={this.onInputChange} />

        <button onClick={this.onClick}>Add Item</button>

        <ul>{listItems}</ul>
      </div>
    );
  }
});

export default List;
