//depeneds on React and a Header Component

import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

// extends React.compontent, gives it state, makes it class-based
// react.CreateClass also does this, but extend is newer
// const App = () => { return();}; is STATELESS, constant

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  // custom behavior for the life cycle of the component can be itilized with these hooks
  componentDidMount() {

  }
  // ^^ used for AJAX fetching, timers, listeners


  // componentWillUnmount(){
  //   console.log('will unmount');
  //   debugger;
  // };
  // ^^ used for CLEANING AJAX fetching, timers, listeners so they don't leak out
  // of the scope of the component

  render(){
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            // each map call must have a unique key to indentify the child element inside that map
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
