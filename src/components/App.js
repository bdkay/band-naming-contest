//depeneds on React and a Header Component

import React from 'react';
import Header from './Header';

//extends React.compontent

class App extends React.Component {
  state = {
    test: 42
  }
  render(){
    return (
      <div className="App">
        <Header message="Node-ing Contests" />
        <div>
        {this.state.test}
        </div>
      </div>
    );
  }
}

export default App;
