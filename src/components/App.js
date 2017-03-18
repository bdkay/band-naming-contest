//depeneds on React and a Header Component

import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

// extends React.compontent, gives it state, makes it class-based
// react.CreateClass also does this, but extend is newer
// const App = () => { return();}; is STATELESS, constant

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  // custom behavior for the life cycle of the component can be itilized with these hooks
  componentDidMount() {

  }
  // ^^ used for AJAX fetching, timers, listeners


  componentWillUnmount(){
    // ^^ used for CLEANING AJAX fetching, timers, listeners so they don't leak out
    // of the scope of the component
  }

  fetchContest = (contestId) => {
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );
    // lookup the contest, put things on the state related to the contest I just clicked
    // this.state.contests[contestId]
    api.fetchConest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id
      });
    })
  };

  currentContest(){
    return this.state.contests[this.state.currentContestId];
  }
  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.currentContest()} />;
    }

    return <ContestList
      onContestClick={this.fetchContest}
      contests={this.state.contests} />;
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
