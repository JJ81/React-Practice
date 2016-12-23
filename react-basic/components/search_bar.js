import React, { Component } from 'react';
// info. { Component} => const Component = React.Component;

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term : ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.setState({term : event.target.value})}
          value={this.state.term}
          placeholder="insert words" />
      </div>
    );
  }
}

export default SearchBar;
