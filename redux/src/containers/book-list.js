import React, {Component} from 'react';
import { connect } from 'react-redux'; // glue

import { selectBook } from '../actions/index';
// http://redux.js.org/docs/api/bindActionCreators.html
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book) }
          className="list-group-item"
          key={book.title}>{book.title}
        </li>
      );
    });
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
  // whenever selectbook is called,
  // the result should be passed to all of our reducers
  return bindActionCreators({selectBook : selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispath method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
