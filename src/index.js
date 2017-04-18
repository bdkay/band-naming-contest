//dis a component, all it does is render a top level Component to the DOM
//depeneds on App Component

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);


  // ### AJAX, eliminating it reduces API call...
  // axios.get('/api/contests')
  // .then(resp => {
  //   // this.setState({
  //   //   contests: resp.data.contests
  //   // });
  //   ReactDOM.render(
  //     <App initialContests={resp.data.contests} />,
  //     document.getElementById('root')
  //   );
  //   // this.setState({
  //   //   contests: data.contests
  //   // });
  // });
  //});

  // setTimeout(() => {
  //   ReactDOM.render(
  //     <h2>...</h2>,
  //     document.getElementById('root')
  //   );
  // }, 4000);
