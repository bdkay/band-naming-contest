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
  state = this.props.initialData;
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  }

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
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest._id,
        contests: {
          ...this.state.contests,
          [contest._id]: contest
        }
      });
    });
  };
  fetchContestList = () => {
    pushState(
      { currentContestId: null },
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };

// Current Contest
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  pageHeader(){
    if (this.state.currentContestId){
      return this.currentContest().contestName;
    } else {
      return 'Naming Contests';
    }
  }
// Current Content
  currentContent() {
    if (this.state.currentContestId) {
      return <Contest
              contestListClick={this.fetchContestList}
              {...this.currentContest()} />;
    }

    return <ContestList
      onContestClick={this.fetchContest}
      contests={this.state.contests} />;
  }

  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
