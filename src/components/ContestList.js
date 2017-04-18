import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId =>
      // each map call must have a unique key to indentify the child element inside that map
      <ContestPreview
        key={contestId}
        onClick={onContestClick}
        {...contests[contestId]} />
    )}
  </div>
);

ContestList.propTypes = {
  contests: React.PropTypes.object
};

export default ContestList;
