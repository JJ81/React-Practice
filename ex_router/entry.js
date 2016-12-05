// require('./public/css/style.min.css');
// var hello = require('./public/js/hello');
// document.write('hello');
import './public/css/style.min.css';

import React from 'react';
import ReactDom from 'react-dom';

//import hello from './public/js/hello';
import App from './public/js/hello';
const rootElement = document.getElementById('react');
ReactDom.render(<App />, rootElement);

//
// document.write(`<h1>${hello}</h1>`);
// document.write(`<h1>${hello}</h1>`);
// document.write(`<h1>${hello}</h1>`);

// var React = require('react');
// var ReactDom = require('react-dom');
//
// var TestView = React.createClass({
//   render: function () {
//     return (<h1>hello reactjs</h1>);
//   }
// });
//
// ReactDom.render(<TestView />, document.getElementById('react'));
