import React, {Component} from 'react';
import { connect } from 'react-redux';

// 데이터를 받아서 갱신하여 보여주기만 하기 때문에 action이 바인딩되지 않는다. bindActionCreators가 필요 없다.
// 반면, book-list의 경우 필요하며, dispatch가 사용되어 connect에 연결이 된다.
class BookDetail extends Component{
  render() {
    if(!this.props.book){
        return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book : state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
