import './public/css/style.min.css';
import React from 'react';
import ReactDom from 'react-dom';

import App from './public/js/hello';
const rootElement = document.getElementById('react');
ReactDom.render(<App />, rootElement);
