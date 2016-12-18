import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

// console.developers.google.com
// npm install --save youtube-api-search

const API_KEY = 'AIzaSyApa7j4wD2SYPPe43SVEbDqtVOGDwOj1vc';

const App = () => {
  return (
    <div className="container">
      <div><SearchBar /></div>
      Hi, React

    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#react'));
