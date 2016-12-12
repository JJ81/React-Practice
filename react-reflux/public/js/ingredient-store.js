import HTTP from '../../services/httpservice';
import Reflux from 'reflux';
import Actions from './actions';

var IngredientStore = Reflux.createStore({

  listenable : [Actions],

  getIngredients: function () {
    console.info('call store');
    HTTP.get('/ingredients')
    .then(function (data){
      this.ingredients = data;
      this.fireUpdate();
    }.bind(this));
  },

  postIngredient : function (text){
    console.info('store : ' + text);
    if(!this.ingredients){
      this.ingredients = [];
    }

    var ingredient = {
      'text' : text,
      'id' : Math.floor(Date.now()/1000) + text
    };

    this.ingredients.push(ingredient);
    this.fireUpdate();

    HTTP.post('/ingredients', ingredient)
    .then(function () {
      this.getIngredients();
    }.bind(this));

  },

  fireUpdate: function (){
    console.info('fire up');
    this.trigger('change', this.ingredients);
  }
});

export default IngredientStore;
