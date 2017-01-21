import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>header</header>
        <section>{this.props.children}</section>
        <footer>Footer</footer>
      </div>
    );
  }
}
