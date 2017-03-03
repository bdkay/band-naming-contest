//dis a component, all it does is render a top level Component to the DOM
//depeneds on App Component

import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// setTimeout(() => {
//   ReactDOM.render(
//     <h2>...</h2>,
//     document.getElementById('root')
//   );
// }, 4000);
