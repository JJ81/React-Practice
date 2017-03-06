import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>Header</header>
        <section>{this.props.children}</section>
        <footer>Footer</footer>
      </div>
    );
  }
}
