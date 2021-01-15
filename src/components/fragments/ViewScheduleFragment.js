import React from 'react';

const ViewScheduleFragment = ({ schedule }) => {
  return (
    <div>
      <p>Schedule title will be here</p>
      <small>loop over schedule here?</small>
      <br />
      {schedule}
    </div>
  );
};

export default ViewScheduleFragment;
