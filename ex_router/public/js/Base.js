import React from 'react';
import { Link } from 'react-router';

class Base extends React.Component {
  render () {
    return (
      <div>
        <h1>Header</h1>
        <nav>
          <ol>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/page1">page1</Link></li>
          <li><Link to="/page2">page2</Link></li>
          </ol>
        </nav>
        <div className="container">{this.props.children}</div>
        <h1>Footer</h1>
      </div>
    );
  }
}

export default Base;
