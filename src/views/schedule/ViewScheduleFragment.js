import React from 'react';
import '../../App.css';

const ViewScheduleFragment = ({ schedule }) => {
  return (
    <div>
      <h3>Schedule</h3>
      <div className='view-item'>
        <p>
          {schedule.repeatable.map((repeat) => (
            <span key={repeat}>[{repeat}]</span>
          ))}
        </p>
        <p>
          {schedule.start} - {schedule.end}
        </p>
      </div>
    </div>
  );
};

export default ViewScheduleFragment;
